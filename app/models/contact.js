import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    name: validator('presence', true)
});

export default Model.extend(Validations, {
    createdAt: attr('date', {
      defaultValue() { return new Date(); }
    }),
    accessedAt: attr('date', {
      defaultValue() { return new Date(); }
    }),
    name: attr(),
    emailAddress: attr(),
    phoneNumber: attr()
});

