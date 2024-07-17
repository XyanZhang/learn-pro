// at-least-one-validator.ts
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

function AtLeastOne(property1: string, property2: string) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'atLeastOne',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property1, property2],
      options: { message: 'At least one of the properties must be provided' },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName1, relatedPropertyName2] = args.constraints[0];
          const relatedProperty1 = args.object[relatedPropertyName1];
          const relatedProperty2 = args.object[relatedPropertyName2];
          return (relatedProperty1 || relatedProperty2) !== undefined && (relatedProperty1 || relatedProperty2) !== null;
        },
      },
    });
  };
}

export default AtLeastOne;