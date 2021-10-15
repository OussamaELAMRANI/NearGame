<?php

namespace App\Tests\Helper;

use App\Helper\FormatterHelper;
use PHPUnit\Framework\TestCase;

class FormatterHelperTest extends TestCase
{
    public function testSnackCase()
    {
        $camelCase = "CamelCaseTest";
        $sneakCase = "camel_case_test";

        $this->assertEquals($sneakCase, FormatterHelper::toSneakCase($camelCase));
    }
}
