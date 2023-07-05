import React, { ButtonHTMLAttributes } from "react";

export type ButtonVariantTypes = "primary" | "dark" | "danger" | "default";

type ButtonBaseProps = {
  variant?: ButtonVariantTypes;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonChildrenProps = {
  children: React.ReactNode;
  title?: never;
} & ButtonBaseProps;

type ButtonTitleProps = {
  children?: never;
  title: string;
} & ButtonBaseProps;

export type ButtonPropsTypes = ButtonChildrenProps | ButtonTitleProps;
