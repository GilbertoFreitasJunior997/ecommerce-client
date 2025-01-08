import { DropdownMenu } from "@/components/dropdown-menu";
import { uppercaseFirstLetter } from "@/lib/utils/string";
import { themes } from "./consts";

export const TopbarThemeSwitcher = () => {
  return (
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger withHandler={false}>
        Select theme
      </DropdownMenu.SubTrigger>
      <DropdownMenu.Portal>
        <DropdownMenu.SubContent
          className="mb-4"
          sideOffset={8}
        >
          <DropdownMenu.RadioGroup
            value={themes[0]}
            // onValueChange={(value) => setTheme(value)}
          >
            {themes.map((theme) => (
              <DropdownMenu.RadioItem
                key={theme}
                value={theme}
              >
                {uppercaseFirstLetter(theme)}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  );
};
