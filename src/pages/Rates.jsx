import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import RatesList from '../components/RatesList/RatesList';

const Rates = () => {
  const isError = false;

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${'UAH'} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}

        <RatesList
          rates={[
            { key: 'UAH', value: '1.0' },
            { key: 'USD', value: '2.75' },
            { key: 'EUR', value: '3.48' },
          ]}
        />
      </Container>
    </Section>
  );
};

export default Rates;
