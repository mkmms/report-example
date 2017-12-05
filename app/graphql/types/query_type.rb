Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  field :user do
    type types[Types::UserType]
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      User.all
    }
  end
end
