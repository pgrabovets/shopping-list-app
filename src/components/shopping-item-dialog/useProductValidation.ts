import { useState } from "react";

export const useProductValidation = (product: {
  name: string;
  category: string;
}) => {
  const [errors, setErrors] = useState({
    name: false,
    category: false,
  });

  const resetErrors = () => {
    setErrors({
      name: false,
      category: false,
    });
  };

  const validate = () => {
    let nameError = false;
    let categoryError = false;

    if (!product.category) {
      categoryError = true;
    }

    if (!product.name) {
      nameError = true;
    }

    setErrors({
      name: nameError,
      category: categoryError,
    });

    return !nameError && !categoryError;
  };

  return {
    errors,
    setErrors,
    resetErrors,
    validate,
  };
};
