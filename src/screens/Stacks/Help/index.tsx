/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';

//assets
import {CardHelp} from '../../../components/CardHelp';

//styles-components
import {Wrapper, WrapperBox, Title} from './styles';

export function Help() {
  //   const navigation = useNavigation();

  return (
    <Wrapper>
      <WrapperBox>
        <Title>Contato</Title>
      </WrapperBox>

      <CardHelp title="E-mail" subTitle="suporte@worktab.com.br" />

      <CardHelp title="Instagram" subTitle="@Worktabfacial" />

      <CardHelp title="Site" subTitle="https://www.worktab.com.br" />

      <WrapperBox>
        <Title>Whatsapp</Title>
      </WrapperBox>

      <CardHelp title="Número" subTitle="(31) 9 6538-8872" />
    </Wrapper>
  );
}
