<?php 

class NoteType
{
    public static function for(string $module): array
    {
        return config("note_types.$module", []);
    }

    public static function isValid(string $module, string $type): bool
    {
        return in_array($type, self::for($module));
    }
}