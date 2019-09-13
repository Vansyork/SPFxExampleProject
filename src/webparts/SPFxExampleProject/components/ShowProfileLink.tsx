import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
import styles from './ShowProfileLink.module.scss';

export interface IShowProfileLinkProps {
    displayName: string;
    href: string;
    target: string;
}

export default class ShowProfileLink extends React.Component<IShowProfileLinkProps, {}> {

    constructor(props) {
        super(props);
    }

    public render(): React.ReactElement<IShowProfileLinkProps> {
        var { displayName, ...other } = this.props;
        return (
            <DefaultButton {...other}><span className={styles.buttonText}>Show Profile of {displayName}</span></DefaultButton>
        );
    }
}
