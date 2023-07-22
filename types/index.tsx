import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface CustomSearchProps {
    manufacturer: string,
    setManuFacturer: (manufacture: String) => void
}
export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export type CarState = carProps[] & { message?: string };

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }

  export interface OptionProps {
    title: string;
    value: string;
  }

  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

  export interface SearchBarProps {
    setManuFacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
  }

  export interface SearchManuFacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
  }

