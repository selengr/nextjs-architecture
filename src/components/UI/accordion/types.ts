import { boolean } from 'yup';

export type IUIAccordionProps = {
  label: string;
  details: string;
  tabIndex?: number;
  name: string;
  checked: boolean;
  error: boolean;
  handle_payWith: (e: React.MouseEvent<HTMLButtonElement> | any) => void;
};
