import ErrorRepository from '../main';

test('should return an error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate('112')).toBe('Invalid symbol');
});

test('should return an Unknown Error', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate('55')).toBe('Unknown error');
});
