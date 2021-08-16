import React from 'react';
import SignInContainer from '../components/SignInContainer';
import { render, fireEvent, waitFor, act} from '@testing-library/react-native';

describe('Testing sign-in stuff', () => {
    test('Pressing submit will call handlesubmit', async () => {
        const onSubmit = jest.fn();
        const { debug, getByTestId } = render( <SignInContainer onSubmit={onSubmit} /> );
        debug();
        await act(async () => {
            await fireEvent.changeText( getByTestId('username'), 'kalle');
        });
        await act(async () => {
            await fireEvent.changeText( getByTestId('password'), 'kalle');
        });
        await act(async () => {
            await fireEvent.press( getByTestId('signInButton'));
        });

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual( {
                username: 'kalle',
                password: 'kalle'
            });
        });

    });
});