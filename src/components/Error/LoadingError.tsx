import Container from "../Container/Container";


const LoadingError = () => {
  return (
    <div className="h-[40vh]">
      <Container>
        <div className="pt-12 md:pt-24">
          <p className="mt-20 py-40 text-center text-xl font-semibold text-primary">
            Something went wrong!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoadingError;
