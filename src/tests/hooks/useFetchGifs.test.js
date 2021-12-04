import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {
  test('debe devolver el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });

  test('debe devolver un arreglo de imágenes y el loading igual a false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toEqual(false);
  });
});
