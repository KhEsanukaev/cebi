import { useState } from "react";
import { createContext } from "react";

export const FormContext = createContext(null);

interface FormContextProps {
    children: React.ReactNode;
    initialForm: any[]
}

export const FormProvider = ({ children, initialForm = [] }: FormContextProps) => {
  const [form, setForm] = useState(initialForm);
  return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
};