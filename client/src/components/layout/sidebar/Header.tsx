import React from "react";
import Button from "../../ui/Button";
import { Bell, PanelRightOpen } from "lucide-react";

interface HeaderProps {
  user: {
    name: string;
    avatar: string;
  };
  notificationCount?: number;
  onTogglePanel?: () => void;
  onOpenNotification?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  user,
  notificationCount,
  onTogglePanel,
  onOpenNotification,
}) => {
  return (
    <div className="w-full h-15 bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-800 border-neutral-300 p-2 rounded-md flex items-center justify-between">
      <div className="w-full flex items-center gap-2">
        <div className="size-10 rounded-full overflow-hidden shadow-lg">
          <img src={user.avatar} alt={user.name} />
        </div>
        <span className="text-sm font-medium">{user.name}</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="relative grid place-content-center">
          <Button
            variant="ghost"
            color="secondary"
            className=" rounded-sm p-2"
            hasIcon
            title="Notifications"
            onClick={onOpenNotification}
          >
            <Bell size={20} strokeWidth={1} />
            {notificationCount! > 0 && (
              <span className="size-2 bg-rose-500 rounded-full absolute top-2 left-2.5" />
            )}
          </Button>
        </div>
        <Button
          className="p-2 rounded-sm"
          variant="ghost"
          color="secondary"
          title="Close Panel"
          onClick={onTogglePanel}
        >
          <PanelRightOpen size={20} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
