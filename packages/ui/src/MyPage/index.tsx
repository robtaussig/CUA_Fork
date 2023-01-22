import { useState, useRef } from 'react';
import { ScrollView, H2, Section, XStack, Paragraph, Spinner, YStack } from 'tamagui';
import { Page } from './Page';
import { NavBar } from './NavBar';
import { PageSection } from './PageSection';
import { TOP_NAV_HEIGHT, TopNav } from './TopNav';
import { NavItem, NavLink } from './NavLink';
import { MyButton } from '../components/MyButton';
import { Settings, LogOut, LogIn } from '@tamagui/lucide-icons';
import { SignedIn, SignedOut, useAuth } from 'app/utils/clerk';

type Section = {
  title: string;
  Icon?: React.ExoticComponent<any>;
  content: React.ReactNode;
};

type Status = 'loading' | 'success' | 'error';

interface Props {
  sections: Section[];
  statuses?: Status[];
  pageTitle: string;
  navItems: NavItem[];
  isSettings?: boolean;
}

export const MyPage: React.FC<Props> = ({
  pageTitle,
  navItems,
  sections,
  isSettings,
  statuses = [],
}) => {
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const scrollHigh = useRef(0);
  const scrollLow = useRef(Infinity);
  const { signOut } = useAuth();
  const isLoading = statuses.some((status) => status === 'loading');
  const isError = statuses.some((status) => status === 'error');
  const isSuccess = !isLoading && !isError;

  return (
    <Page>
      <TopNav key={`${pageTitle}-top-nav`} show={isScrollingDown}>
        <H2 color={'white'} fontSize={20} marginRight={'auto'}>
          {pageTitle}
        </H2>
        <SignedIn>
          <MyButton
            icon={Settings}
            text={'Settings'}
            linkTo={'/settings'}
            isActive={isSettings}
            chromeless
          />
          <MyButton
            icon={LogOut}
            onClick={() => {
              signOut();
            }}
            chromeless
          />
        </SignedIn>
        <SignedOut>
          <MyButton linkTo='/signup' text={'Sign Up'} chromeless />
          <MyButton icon={LogIn} linkTo='/signin' text={'Sign In'} chromeless />
        </SignedOut>
      </TopNav>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        space={'$4'}
        scrollEventThrottle={100}
        marginTop={TOP_NAV_HEIGHT}
        marginBottom={80}
        contentContainerStyle={isLoading ? {
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flex: 1,
        } : undefined}
        onScroll={(e) => {
          const scrollPos = e.nativeEvent.contentOffset.y;

          if (scrollHigh.current - scrollPos > 50) {
            setIsScrollingDown(false);
            scrollHigh.current = 0;
          } else if (
            scrollPos - scrollLow.current > 50 ||
            (!isScrollingDown && scrollPos < 50)
          ) {
            setIsScrollingDown(true);
            scrollLow.current = Infinity;
          } else if (isScrollingDown) {
            scrollHigh.current = Math.max(scrollHigh.current, scrollPos);
          } else {
            scrollLow.current = Math.min(scrollLow.current, scrollPos);
          }
        }}
      >
        {isError ? (
          <Paragraph>Error...</Paragraph>
        ) : isLoading ? (
          <Spinner/>
        ) : sections.map(({ title, content, Icon }) => (
          <PageSection key={title} space={'$2'}>
            <XStack ai={'center'} space={'$2'}>
              {Icon && <Icon color={'$green9'} />}
              <H2 color={'$green9'} fontSize={18} fontWeight={'300'}>
                {title}
              </H2>
            </XStack>
            {content}
          </PageSection>
        ))}
      </ScrollView>
      <NavBar>
        {navItems.map((navItem) => (
          <NavLink key={navItem.text} item={navItem} />
        ))}
      </NavBar>
    </Page>
  );
};
