<?php

declare(strict_types=1);

namespace App\Http\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin/{reactRouter}", name="admin", path="[\/\w\.-]*", defaults={""})
     */
    public function index(string $reactRouter = ''): Response
    {
        return $this->render('admin/index.html.twig');
    }
}
