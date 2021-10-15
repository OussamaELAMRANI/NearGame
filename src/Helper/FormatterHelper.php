<?php

namespace App\Helper;

final class FormatterHelper
{

    /**
     *
     *
     * @param string $camelCase
     * @return string
     */
    public static function toSneakCase(string $camelCase): string
    {
        return ltrim(strtolower(preg_replace("/(?<!^)[A-Z]/", "_$0",$camelCase)));
    }
}
