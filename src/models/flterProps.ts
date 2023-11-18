export interface FilterSetProps {
  filterState: string | string[];
  filterStateFunc: (state: string) => void;
  dispatch: (func: any) => void;
}

export interface FilterStateProps {
  headlineFilter: string;
  dateFilter: string;
  nationFilter: string[];
}
