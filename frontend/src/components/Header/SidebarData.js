import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },

    {
        title: 'Equipe',
        path: '/equipe',
        icon: <RiIcons.RiTeamFill/>,
        cName: 'nav-text'
    },

    /*{
        title: 'Cav tv',
        path: '/cavtv',
        icon: <BsIcons.BsFillCameraVideoFill/>,
        cName: 'nav-text'
    },

    {
        title: 'Photo',
        path: '/photo',
        icon: <MdIcons.MdOutlinePhotoCamera />,
        cName: 'nav-text'
    },*/

    {
        title: 'Boutique',
        path: '/boutique',
        icon: <IoIcons.IoStorefrontOutline />,
        cName: 'nav-text'
    },

    {
        title: 'Cart',
        path: '/cart',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {
        title: 'Rechercher',
        path: '#',
        icon: <IoIcons.IoSearchOutline />,
        cName: 'nav-text'
    },

]