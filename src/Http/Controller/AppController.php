<?php declare(strict_types=1);

namespace App\Http\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
