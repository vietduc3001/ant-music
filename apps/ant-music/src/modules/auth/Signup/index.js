import { SignupJwtAuth, SignupFirebase } from '@ant-music/modules/auth/SignUp';
import DepartmentSelect from '../../../components/Select/DepartmentSelect';
import RoleSelect from '../../../components/Select/RoleSelect';
import { useIntl } from 'react-intl';

const Signup = () => {
  const { messages } = useIntl();
  return (
    <SignupJwtAuth
      DepartmentSelect={
        <DepartmentSelect
          width='100%'
          placeholder={messages['common.department']}
        />
      }
      RoleSelect={
        <RoleSelect width='100%' placeholder={messages['common.role']} />
      }
    />
  );
};

export default Signup;
