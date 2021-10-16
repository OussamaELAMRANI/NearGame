<?php

namespace App\Infrastructure\Maker;

use Symfony\Component\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class MakeEntityCommand extends AbstractMakeCommand
{
    protected static $defaultName = 'yo:entity';
    protected static string $entity = 'entityName';

    protected function configure(): void
    {
        $this
            ->setDescription('Create Entity based on the Domain')
            ->addArgument(static::$entity, InputArgument::OPTIONAL, "Entity Name");
    }

    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     * @return int
     * @throws \Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $domain = $this->askDomain($io);
        /** @var string $entity */
        $entity = $input->getArgument(static::$entity);

        /** @var Application $application */
        $application = $this->getApplication();
        // re-use the core command.
        $command = $application->find('make:entity');
        $arguments = [
            'command' => 'make:entity',
            'name' => "\\App\\Domain\\$domain\\Entity\\$entity",
        ];
        $greetInput = new ArrayInput($arguments);

        return $command->run($greetInput, $output);
    }
}
