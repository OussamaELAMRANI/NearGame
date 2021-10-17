<?php

namespace App\Helper;

final class FormatterHelper
{
    /**
     *  Format camelCase to sneak_case.
     */
    public static function toSneakCase(string $camelCase): string
    {
        $result = preg_replace('/(?<!^)[A-Z]/', '_$0', $camelCase);

        return ltrim(strtolower(is_null($result) ? '' : $result));
    }
}
