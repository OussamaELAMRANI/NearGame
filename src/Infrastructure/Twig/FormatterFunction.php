<?php

namespace App\Infrastructure\Twig;

use App\Helper\FormatterHelper;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FormatterFunction extends AbstractExtension
{
    /**
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('sneak_case', [$this, 'toSneakCase']),
        ];
    }

    public function toSneakCase(string $camelCase): string
    {
        return FormatterHelper::toSneakCase($camelCase);
    }
}
