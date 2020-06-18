<template>
    <nav class="navbar navbar-expand-sm bg-light">

    <ul class="navbar-nav">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Users' }">
                User
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Roles' }">
                Roles
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Privileges' }">
                Privileges
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AddUser' }">
                Add User
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AddRole' }">
                Add Role
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'AddPrivilege' }">
                Add Privilege
            </router-link>
        </li>
    </ul>
    </nav>
</template>