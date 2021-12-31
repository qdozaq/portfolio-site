declare global {
	namespace NodeJS {
		interface Process {
			browser: boolean;
		}
	}
}

export {};
