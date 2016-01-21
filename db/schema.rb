ActiveRecord::Schema.define(version: 20160111050829) do
  enable_extension "plpgsql"

  create_table "ratings", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
