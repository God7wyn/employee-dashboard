import { defineStore } from 'pinia'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => {
    return {
      users: [],
      searchText: '',
      userDetail: {},
      userSelectedStatus: '',
      userDetailsOpen: false
    }
  },
  getters: {
    getUserByID: () => async (id) => {
      const res = await fetch(`http://localhost:3000/users/${id}`)
      const data = await res.json()
      return data
    },
    filteredUsers: (state) => {
      let filteredUsers = state.users
      if (state.searchText) {
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.userName.toLowerCase().includes(state.searchText.toLowerCase()) ||
            user.dob.toLowerCase().includes(state.searchText.toLowerCase())
        )
      }
      return filteredUsers
    }
  },
  actions: {
    async setUsers() {
      try {
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json()
        this.users = data
      } catch (error) {
        console.error(error)
      }
    },
    setSearchValue(value) {
      this.searchText = value
    },
    async openUserDetails(id) {
      try {
        this.userDetail = await this.getUserByID(id)
        this.updateUserSelectedStatus(this.userDetail.applicationStatus)
        this.userDetailsOpen = true
      } catch (error) {
        console.error(error)
      }
    },
    closeUserDetails() {
      this.userDetailsOpen = false
    },
    async updateUserApplicationStatus(id) {
      try {
        await fetch('http://localhost:3000/users/' + id, {
          method: 'PATCH',
          body: JSON.stringify({ applicationStatus: this.userSelectedStatus }),
          headers: { 'Content-Type': 'application/json' }
        })
        this.setUsers()
      } catch (error) {
        console.error(error)
      }
    },
    updateUserSelectedStatus(value) {
      this.userSelectedStatus = value
    }
  }
})
