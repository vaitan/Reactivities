import React from "react";
import { Button, Menu } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function Navbar({ openForm }: Props) {
    return (
        <Menu inverted fixed='top'>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo" />
                Reactivities
            </Menu.Item>
            <Menu.Item name="Activity" />
            <Menu.Item>
                <Button positive content="Create Activity" onClick={openForm}></Button>
            </Menu.Item>
        </Menu>
    )
}