<?php

declare(strict_types=1);

namespace App\Http\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{
    /**
     * @Route("/appcontroller", name="app_controller")
     */
    public function index(): Response
    {
        return $this->json(['data' => 'App'], Response::HTTP_OK);
    }

    /**
     * @Route("/profiler", name="profiler_test")
     */
    public function testProfiler(Request $request): Response
    {
        dump($request);

        return $this->render('base.html.twig');
    }
}
