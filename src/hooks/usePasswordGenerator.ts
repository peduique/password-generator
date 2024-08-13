import { ChangeEvent, useState } from "react";
import { generatePassword } from "../helpers/generatePassword";

const DEFAULT_FILTER = {
  options: ['lowercase'],
  length: 8
}

export const usePasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [filters, setFilters] = useState(DEFAULT_FILTER);

  const updateLength = ({ target }: ChangeEvent<HTMLInputElement>) => {
    return parseInt(target.value, 10);
  }

  const updateOptions = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.checked
      ? [...filters.options, target.name]
      : filters.options.filter(option => option !== target.name);

    if (value.length === 0) {
      return filters.options;
    }

    return value
  }

  const onUpdateFilters = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = type === 'length' ? updateLength(event) : updateOptions(event);

    setFilters(prev => ({ ...prev, [type]: value }));
  }

  const onGeneratePassword = () => {
    const generatedPassword = generatePassword(filters.options, filters.length);

    setPassword(generatedPassword);
  }

  return { filters, password, onUpdateFilters, onGeneratePassword }
}
