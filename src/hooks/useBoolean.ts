import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface useBooleanProps {
	initialValue?: boolean;
}

type ReturnType = [
	boolean,
	{
		toggle: () => void;
		setTrue: () => void;
		setFalse: () => void;
		setValue: Dispatch<SetStateAction<boolean>>;
	}
];

function useBoolean({ initialValue }: useBooleanProps = {}): ReturnType {
	const [value, setValue] = useState(initialValue ?? false);

	const setTrue = useCallback(() => setValue(true), []);
	const setFalse = useCallback(() => setValue(false), []);
	const toggle = useCallback(() => setValue((x) => !x), []);

	return [value, { toggle, setTrue, setFalse, setValue }];
}

export default useBoolean;
