import React from 'react'
import {MenuContainer,MenuWrapper,Menu,MenuLink} from "./ProfileMenuElements"
const ProfileMenu = ({isOpen}) => {
    return (
        <>
        <MenuContainer isOpen={isOpen}>
            <MenuWrapper>
                <Menu>
                    <MenuLink to="/profile">Profile</MenuLink>
                    <MenuLink to="/logOut">LogOut</MenuLink>
                </Menu>
            </MenuWrapper>
        </MenuContainer>
        </>
    )
}

export default ProfileMenu