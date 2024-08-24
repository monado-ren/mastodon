class AddAvatarFrameNameToAccounts < ActiveRecord::Migration[6.1]
    def change
      add_column :accounts, :avatar_frame_type, :string, null: true, default: nil
    end
  end
  