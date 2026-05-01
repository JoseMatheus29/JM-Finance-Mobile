export interface FieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (v: string) => void;
  icon: string;
  keyboardType?: any;
  secure?: boolean;
  autoCapitalize?: any;
}
