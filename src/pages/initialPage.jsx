import { Wrapper, Brand, Spinner, LoadingText } from "./initialPage.styles";

const InitialPage = () => {
  return (
    <Wrapper>
      <Brand>Lyftag</Brand>
      <Spinner />
      <LoadingText>Loading…</LoadingText>
    </Wrapper>
  );
};

export default InitialPage;
