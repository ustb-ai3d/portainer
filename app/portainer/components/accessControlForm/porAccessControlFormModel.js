import { ResourceControlOwnership as RCO } from 'Portainer/models/resourceControl/resourceControlOwnership';

/**
 * @deprecated use only for angularjs components. For react components use ./model.ts
 */
export function AccessControlFormData() {
  this.AccessControlEnabled = true;
  this.Ownership = RCO.RESTRICTED;
  this.AuthorizedUsers = [];
  this.AuthorizedTeams = [];
}
