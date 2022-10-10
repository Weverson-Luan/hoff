/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';

//assets
import GroupSVG from '../../assets/group.svg';
import ArrowLeftSVG from '../../assets/arrow-left.svg';

/**
 * STYLED-COMPONENTS
 */
import {ContainerHeader, Content, TitleName, ButtonIcon} from './styles';

interface HeaderPatientInfoProps {
  title: string;
  variant?: boolean;
  onPress: () => void;
}
export function HeaderPatientInfo({
  title,
  onPress,
  variant,
}: HeaderPatientInfoProps) {
  const navigation = useNavigation();
  return (
    <ContainerHeader>
      <Content>
        <ButtonIcon onPress={() => navigation.navigate('Authentication')}>
          <ArrowLeftSVG width={22} height={22} />
        </ButtonIcon>
        <TitleName>{title}</TitleName>
        <ButtonIcon onPress={onPress}>
          {!variant && <GroupSVG width={22} height={22} />}
        </ButtonIcon>
      </Content>
    </ContainerHeader>
  );
}
