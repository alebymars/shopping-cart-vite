import { ReactNode } from 'react';
import styles from "./DualButton.module.css";
import Button from '../Button';
import { Icon20Add, Icon28MinusOutline } from '@vkontakte/icons';

interface Props {
    titleOne: string;
    titleTwo: string;
    onClickOne: () => void;
    onClickTwo: () => void;
    disabledIncrementButton?: boolean;
    disabledDecrementButton?: boolean;
    removeButton?: ReactNode;
    style?: React.CSSProperties;
}

const DualButton = ({ titleOne, titleTwo, onClickOne, onClickTwo, disabledIncrementButton, disabledDecrementButton, removeButton, style }: Props) => {
    return (
        <div className={styles.buttonContainer} style={{ ...style }}>
            <Button disabled={disabledDecrementButton} icon={<Icon28MinusOutline color="rgba(0, 140, 255, 1)" width={20} height={20} />} title={titleOne} onClick={onClickOne} />
            <Button disabled={disabledIncrementButton} icon={<Icon20Add color="rgba(0, 140, 255, 1)" width={20} height={20} />} title={titleTwo} onClick={onClickTwo} />
            {removeButton}
        </div>
    )
};

export default DualButton;
