class UsersService {

  static users = {
    poiayustfgvsdbakmfn: {
      age: '20',
      favoriteColor: 'blue',
      name: 'John',
    },
    oiudfsahfklsda: {
      age: '34',
      favoriteColor: 'green',
      name: 'Jonathan',
    },
    asdhasdhasdhasddh: {
      age: '86',
      favoriteColor: 'red',
      name: 'Jacob',
    },
    sadghasdhdash: {
      age: '56',
      favoriteColor: 'orange',
      name: 'James',
    },
  };

  /**
   * @async
   * @static
   * @param {Object} usersFilter
   * @returns {Promise<Object>} usersObject
   */
  static async getUsers(usersFilter = {}) {
    return { ...UsersService.users };
  }

}
export default UsersService;
