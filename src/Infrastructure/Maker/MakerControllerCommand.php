<?php

namespace App\Infrastructure\Maker;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Custom Controller Maker to handle our project structure
 * @command <yo:controller>
 *
 * @example ./bin/console yo:controller Director/To/YoController
 * @example ./bin/console yo:controller YoController
 * @example ./bin/console yo:controller YoController --api
 */
class MakerControllerCommand extends AbstractMakeCommand
{
    protected static $defaultName = 'yo:controller';
    protected const CONTROLLER = 'Controller';
    protected const API_OPTION = 'api';

    protected function configure(): void
    {
        $this
            ->setDescription('Create Controller based on Custom "Yo" CLI')
            ->addArgument(static::CONTROLLER, InputArgument::OPTIONAL, 'Controller name')
            ->addOption(static::API_OPTION, null, InputOption::VALUE_NONE, 'Controller for API');
    }

    /**
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\LoaderError
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $controllerPath = $input->getArgument(static::CONTROLLER);

        if (!is_string($controllerPath)) {
            throw new \InvalidArgumentException('ControllerPath should be a string !');
        }

        if (static::CONTROLLER !== substr($controllerPath, -1 * strlen(static::CONTROLLER))) {
            $controllerPath .= static::CONTROLLER;
        }

        $parts = explode('/', $controllerPath);
        if (1 === $partCount = count($parts)) {
            $namespace = '';
            $className = $parts[0];
        } else {
            $namespace = '\\'.implode('\\', array_slice($parts, 0, -1));
            $className = $parts[$partCount - 1];
        }

        $api = $input->getOption('api');
        if (false === $api) {
            $basePath = 'src/Http/Controller/';
        } else {
            $basePath = 'src/Http/Api/Controller/';
        }

        $params = [
            'namespace' => $namespace,
            'class_name' => $className,
            'api' => $api,
        ];

        $this->createFile('controller', $params, "{$basePath}{$controllerPath}.php");

        $io->success("{$className} has been successfully created !");

        return Command::SUCCESS;
    }
}
