export const mockLogin = async ({ email, password }: { email: string; password: string }) => {
    return new Promise<{ token: string }>((resolve, reject) => {
        setTimeout(() => {
            if (email === 'teste@email.com' && password === '123456') {
                resolve({ token: 'fake-jwt-token-123' });
            } else {
                reject(new Error('Email ou senha incorretos'));
            }
        }, 1000); // Simula um atraso na requisição (1s)
    });
};
