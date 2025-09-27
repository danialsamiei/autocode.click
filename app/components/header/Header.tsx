import { useStore } from '@nanostores/react';
import { ClientOnly } from 'remix-utils/client-only';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import { ThemeSwitch } from '~/components/ui/ThemeSwitch';

interface HeaderProps {
  userRole?: string;
  onLogout?: () => void;
}

export function Header({ userRole, onLogout }: HeaderProps = {}) {
  const chat = useStore(chatStore);

  return (
    <header
      className={classNames(
        'flex items-center bg-bolt-elements-background-depth-1 p-5 border-b h-[var(--header-height)]',
        {
          'border-transparent': !chat.started,
          'border-bolt-elements-borderColor': chat.started,
        },
      )}
    >
      <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <div className="i-ph:sidebar-simple-duotone text-xl" />
        <a href="/" className="text-2xl font-semibold text-accent flex items-center">
          <span className="font-bold">Abalon.Click</span>
        </a>
      </div>
      <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary">
        <ClientOnly>{() => <ChatDescription />}</ClientOnly>
      </span>
      
      <div className="flex items-center gap-3">
        {userRole && (
          <div className="flex items-center gap-2 text-sm text-bolt-elements-textSecondary">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span dir="rtl">{userRole}</span>
          </div>
        )}
        
        <ThemeSwitch />
        
        {onLogout && (
          <button
            onClick={onLogout}
            className="text-sm text-bolt-elements-textSecondary hover:text-bolt-elements-textPrimary px-3 py-1 rounded-md hover:bg-bolt-elements-item-backgroundActive transition-colors"
            dir="rtl"
          >
            خروج
          </button>
        )}
      </div>
      
      {chat.started && (
        <ClientOnly>
          {() => (
            <div className="mr-1">
              <HeaderActionButtons />
            </div>
          )}
        </ClientOnly>
      )}
    </header>
  );
}