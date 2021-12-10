import NextLink from 'next/link';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { useRouter } from 'next/router';
import { Text } from '@components/elements/Text';
import { Box } from '@components/layout/Box';
import { Flex } from '@components/layout/Flex';
import {
  NavItems,
  NavLink,
  NavItem,
  PopoverContent,
  PopoverBody,
  ActionLink,
  Spliter,
} from './Header.styles';
import { TextInput } from '@components/elements/TextInput';
import { Icon } from '@components/elements/Icon';
import { IconButton } from '@components/elements/IconButton';
import { Avatar } from '@components/elements/Avatar';

const Links = ['home', 'boards', 'tasks', 'calendar'];

const Header = () => {
  const [isNewOpen, setIsNewOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  const router = useRouter();
  return (
    <Box backgroundColor='white' border='1px solid' borderColor='blackAlpha.2'>
      <Flex justifyContent='space-between' padding='0 2.5rem'>
        <Flex alignItems='center'>
          <Box>
            <Text>Logo</Text>
          </Box>
          <Box ml='4rem' as='nav'>
            <NavItems>
              {Links.map((el) => (
                <NextLink key={el} href={`/${el}`}>
                  <NavItem>
                    <NavLink active={router.pathname === `/${el}`}>
                      {el}
                    </NavLink>
                  </NavItem>
                </NextLink>
              ))}
            </NavItems>
          </Box>
        </Flex>
        <Flex alignItems='center'>
          <TextInput icon={<Icon name='search' />} placeholder='Search' />
          <IconButton
            ml='1rem'
            variant='ghost'
            size='lg'
            ariaLabel='notification'
            icon={<Icon name='bell' />}
          />
          <Popover
            isOpen={isNewOpen}
            positions={['bottom', 'left']}
            align='end'
            reposition={false}
            onClickOutside={() => setIsNewOpen(false)}
            padding={10}
            content={() => (
              <PopoverContent>
                <PopoverBody>
                  <ActionLink>
                    <Icon name='workspace' />
                    workspace
                  </ActionLink>
                  <ActionLink>
                    <Icon name='clipboard' />
                    Board
                  </ActionLink>
                  <ActionLink>
                    <Icon name='person-add' />
                    Invite
                  </ActionLink>
                </PopoverBody>
              </PopoverContent>
            )}
          >
            <div>
              <IconButton
                mr='1rem'
                onClick={() => setIsNewOpen(!isNewOpen)}
                variant='ghost'
                size='lg'
                ariaLabel='create new'
                icon={<Icon name='plus' />}
              />
            </div>
          </Popover>

          <Popover
            isOpen={isAvatarOpen}
            positions={['bottom', 'left']}
            align='end'
            reposition={false}
            onClickOutside={() => setIsAvatarOpen(false)}
            padding={10}
            content={() => (
              <PopoverContent width='20rem'>
                <PopoverBody>
                  <ActionLink hover='gray'>Profile</ActionLink>
                  <ActionLink hover='gray'>Activity</ActionLink>
                  <ActionLink hover='gray'>Settings</ActionLink>
                  <Spliter />
                  <ActionLink hover='gray'>Log out</ActionLink>
                </PopoverBody>
              </PopoverContent>
            )}
          >
            <div>
              <Avatar
                onClick={() => setIsAvatarOpen(!isAvatarOpen)}
                name='Ayoub Kanoun'
              />
            </div>
          </Popover>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
