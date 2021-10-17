<?php

namespace App\Infrastructure\Twig;

use Psr\Cache\CacheItemPoolInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Create <vite_asset('filename.js', ['dep'])>
 * Twig ext to load js dependencies (Vue/react).
 */
class ViteAssetExtension extends AbstractExtension
{
    /**
     * Vite cache Key for manifest.json file.
     *
     * @var string
     */
    protected const CACHE_KEY = 'vite_manifest';

    /**
     * Activate vite by mode (dev/prod).
     */
    private string $viteEnv;

    private string $manifest;

    /**
     * Load file to avoid duplication.
     *
     * @var array<string>
     */
    private ?array $manifestData = null;

    /**
     * Store Manifest.json on the cache to performe parse data.
     */
    private CacheItemPoolInterface $cache;

    public function __construct(string $viteEnv, string $manifest, CacheItemPoolInterface $cache)
    {
        $this->viteEnv = $viteEnv;
        $this->manifest = $manifest;
        $this->cache = $cache;
    }

    /**
     * {@inheritDoc}
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('vite_asset', [$this, 'asset'], ['is_safe' => ['html']]),
        ];
    }

    /**
     * Load Assets for different mode.
     *
     * @param string       $entry
     *                            File name
     * @param array<mixed> $dep
     *                            List of options
     *
     * @return string
     *                Get HTML tags
     */
    public function asset(string $entry, array $dep = []): string
    {
        if ('dev' == $this->viteEnv) {
            return $this->assetDev($entry, $dep);
        }

        return $this->assetProd($entry, $dep);
    }

    /**
     * Load Assets for Dev mode.
     *
     * @param string        $entry
     *                             File name
     * @param array<string> $dep
     *                             List of options
     *
     * @return string
     *                Get HTML tags
     **/
    public function assetDev(string $entry, array $dep = []): string
    {
        $refresher = '<script type="module">
                    import RefreshRuntime from "http://localhost:3000/assets/@react-refresh";
                    RefreshRuntime.injectIntoGlobalHook(window);
                    window.$RefreshReg$ = () => {};
                    window.$RefreshSig$ = () => (type) => type;
                    window.__vite_plugin_react_preamble_installed__ = true;
                </script>';

        $html = <<<HTML
                <script type='module' src='http://localhost:3000/assets/@vite/client'></script>
               {$refresher}
                <script type='module' src='http://localhost:3000/assets/{$entry}' defer></script>
HTML;

        return $html;
    }

    /**
     * Load Assets for Dev mode.
     *
     * @param string        $entry
     *                             File name
     * @param array<string> $dep
     *                             List of options
     *
     * @return string
     *                Get HTML tags
     *
     * @throws \Psr\Cache\InvalidArgumentException
     */
    public function assetProd(string $entry, array $dep = []): string
    {
        if (null === $this->manifestData) {
            $cached = $this->cache->getItem(static::CACHE_KEY);
            if ($cached->isHit()) {
                $this->manifestData = $cached->get();
            } else {
                if (false !== ($content = @file_get_contents($this->manifest))) {
                    $this->manifestData = \json_decode($content, true);
                } else {
                    $this->manifestData = \json_decode('', true);
                }
                $cached->set($this->manifestData);
                $this->cache->save($cached);
            }
        }

        $file = $this->manifestData[$entry]['file'];
        $css = $this->manifestData[$entry]['css'];
        $html = "<script type='module' src='/assets/{$file}' defer></script>";

        foreach ($css as $cssFile) {
            $html .= "<link rel='stylesheet' href='/assets/{$cssFile}'>";
        }

        return $html;
    }
}
