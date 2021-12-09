import styled from "styled-components/native";

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variant[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
