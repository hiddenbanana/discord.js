const Util = require('../util/Util');

/**
 * Represents a user connection (or "platform identity").
 */
class UserConnection {
  constructor(user, data) {
    /**
     * The user that owns the connection
     * @type {User}
     */
    this.user = user;

    this._patch(data);
  }

  _patch(data) {
    /**
     * The type of the connection
     * @type {string}
     */
    this.type = data.type;

    /**
     * The username of the connection account
     * @type {string}
     */
    this.name = data.name;

    /**
     * The id of the connection account
     * @type {string}
     */
    this.id = data.id;

    /**
     * Whether the connection is revoked
     * @type {boolean}
     */
    this.revoked = data.revoked;

    /**
     * Partial server integrations (not yet implemented)
     * @type {Object[]}
     */
    this.integrations = data.integrations;
  }

  toJSON() {
    return Util.flatten(this);
  }
}

module.exports = UserConnection;
