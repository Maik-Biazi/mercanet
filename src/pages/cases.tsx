import { GetStaticProps } from 'next';

import { Case } from '@/components/Case';
import { Depositions } from '@/components/Depositions';
import { Footer } from '@/components/Footer';
import { HeaderCase } from '@/components/HeaderCase';

import { getCase, getInformation, getSeo } from '@/lib/api';
import { Seo } from '@/components/Seo';
import styled from 'styled-components';

function IconMap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <mask id="path-1-inside-1_1418_13" fill="#fff">
        <path d="M63.975 22.346c-.187-2.488-1.312-3.858-3.74-4.446-.197-.048-.394-.109-.594-.127-.504-.045-.802-.318-1.036-.756-.293-.55-.62-1.088-.995-1.585-.727-.965-1.704-1.549-2.917-1.686a23.062 23.062 0 00-2.009-.157 1.273 1.273 0 01-.874-.356c-.637-.57-1.36-.927-2.247-.902-.146.005-.33-.137-.439-.261-.472-.533-1.024-.983-1.737-1.008-.564-.02-.888-.267-1.246-.643-.923-.967-2.157-1.271-3.142-.7-.612.356-1.15.103-1.787.142.158-.248.272-.412.372-.586.687-1.207.486-2.82-.516-3.476-.496-.325-.82-.745-1.136-1.208-.246-.36-.492-.725-.777-1.055-1.492-1.72-3.52-1.704-4.996.033-.25.294-.483.603-.698.873-.77-.333-1.477-.714-2.229-.946-1.238-.383-2.465.067-3.005 1.102-.38.725-1.071.777-1.75 1.104.044-.199.06-.288.083-.374.246-.91.287-1.785-.35-2.582-.095-.12-.094-.323-.122-.489-.137-.83-.503-1.51-1.278-1.907-1.378-.705-2.962-.317-3.905.906-.15.195-.452.38-.685.381-.664.002-1.33-.077-1.992-.155-.738-.085-1.48-.33-2.207-.282-1.648.11-2.729 1.53-2.395 2.992.159.692.617 1.175 1.141 1.615.151.126.278.282.416.424l-.15.17c-.202-.152-.451-.267-.598-.46-.869-1.154-1.965-1.65-3.4-1.26-.105.029-.215.037-.322.061-1.127.25-2.283.411-3.372.772-1.478.491-1.99 1.717-1.495 3.19.045.137.05.3.032.446-.144 1.107-.18 2.188.647 3.093.055.06.1.166.092.243-.082.714-.178 1.428-.276 2.182-.003 0-.094.005-.185 0-1.939-.119-3.174 1.042-4.12 2.475C1.321 18.226.841 19.471.313 20.67c-.496 1.126-.52 2.673.805 3.565.123.083.187.304.211.47.115.793.383 1.532 1.116 1.909.78.4 1.543.854 2.33 1.206.713.317 1.507.44 2.133.98.148.129.408.154.621.175.977.098 1.953.208 2.932.255 1.035.05 1.892-.31 2.47-1.23.099-.157.33-.231.556-.38.07.282.11.43.144.581.227 1.01.697 1.855 1.692 2.273.644.27 1.328.445 1.99.679.48.17.965.336 1.423.556.762.367 1.377 1.042 2.3 1.083.087.004.216.164.244.272.135.527.197 1.078.374 1.589.169.49.34 1.064.705 1.377.489.418 1.137.722 1.766.883.57.146.967.443 1.387.813-.052.082-.089.148-.133.21-.771 1.075-.974 2.241-.578 3.511.053.172.068.371.043.55-.25 1.834.467 3.073 2.176 3.796.16.068.293.272.376.444.206.432.375.882.562 1.324.048.112.164.225.154.328-.095.892.213 1.65.708 2.25-.734.734-1.467 1.41-2.124 2.154-.251.286-.326.726-.485 1.094-.095.217-.15.471-.301.64-1.031 1.155-.876 2.733.385 3.638.693.496 1.43.936 2.086 1.475.542.445 1.128.834.853 1.812-.33 1.179.218 2.207 1.138 2.735.914.525 2.064.384 3.014-.379.721-.58 1.216-1.332 1.614-2.157.076-.157.19-.336.336-.411.619-.32 1.071-.796 1.443-1.372.094-.146.24-.298.397-.356 1.131-.42 1.643-1.267 1.765-2.424.023-.221.132-.477.288-.633.681-.681 1.2-1.465 1.373-2.406.194-1.053.276-2.126.417-3.262.903.157 1.63-.396 2.401-.832.175-.099.36-.178.547-.252.564-.221 1.16-.38 1.688-.668.529-.289 1.004-.324 1.558-.114 1.29.492 2.467.215 3.315-.872.474-.607.854-1.307 1.163-2.016.267-.612.6-1.09 1.183-1.433 1.102-.653 1.804-1.621 1.86-2.917a5.635 5.635 0 01.985-2.972c.07-.103.117-.221.17-.334.34-.713.602-1.438.484-2.252-.07-.486-.009-.947.31-1.36.108-.141.123-.351.208-.516.058-.114.141-.257.25-.301.982-.405 1.397-1.24 1.676-2.176.125-.417.3-.763.737-.956a16.417 16.417 0 001.496-.775c.88-.502 1.57-1.203 1.962-2.14.673-1.614 1.097-3.274.963-5.055zm-2.589 3.084c-.067.155-.087.33-.132.496-.222.809-.688 1.427-1.436 1.822-.593.314-1.183.636-1.786.93-.497.24-.797.629-.98 1.134-.145.396-.272.803-.467 1.173-.112.213-.343.365-.52.544-.178-.195-.36-.384-.53-.585-.048-.056-.04-.16-.086-.215-.118-.14-.254-.266-.383-.398-.084.185-.236.367-.24.553-.014.512.069 1.028.048 1.54-.014.328-.048.731-.24.962-.568.677-.487 1.434-.478 2.218.005.448-.11.908-.242 1.341-.093.307-.29.587-.467.862-.515.794-.8 1.661-.802 2.604-.002.911-.356 1.589-1.17 2.026-.835.449-1.373 1.133-1.696 2.035-.202.565-.528 1.093-.847 1.608-.227.366-.568.484-1.014.3-1.124-.463-2.209-.39-3.28.234-.433.252-.96.34-1.438.519a4.182 4.182 0 00-.734.343c-.54.334-1.033.725-1.75.62-1.084-.157-2.184 1.254-2.054 2.29.106.846-.036 1.738-.166 2.595-.123.813-.642 1.416-1.353 1.822-.3.17-.426.38-.392.714.02.186.017.374.02.561.01.696-.022.701-.674.9-.25.076-.486.275-.673.47-.19.2-.33.456-.462.703-.31.587-.798.79-1.44.73-.63-.06-.743.082-.658.711.038.283.148.636.028.843-.269.463-.649.864-1.012 1.264-.08.088-.322.129-.417.07-.093-.056-.158-.28-.126-.403.105-.405.235-.806.4-1.191.376-.878.288-1.127-.55-1.542-.26-.13-.539-.291-.714-.514-.732-.931-1.696-1.543-2.715-2.094-.132-.072-.244-.18-.547-.406.276-.19.503-.323.704-.489.397-.328.62-.734.516-1.275-.018-.094-.009-.234.05-.295.688-.73 1.282-1.582 2.408-1.735.339-.047.677-.246.97-.441.426-.284.655-.68.568-1.239-.042-.263.047-.548.079-.853-.319-.04-.64-.075-.96-.123a2.611 2.611 0 01-.454-.107c-.914-.311-1.082-.91-.441-1.626.257-.287.56-.533.923-.874-.444 0-.792.01-1.138-.003-.68-.023-1.008-.414-.9-1.096.043-.275.159-.537.236-.806.161-.563-.057-.754-.63-.767a5.57 5.57 0 01-1.627-.295c-.492-.166-.574-.63-.563-1.123.012-.554.04-1.128-.09-1.657-.156-.638-.069-1.166.317-1.67.275-.36.57-.707.82-1.083.373-.564.305-.909-.203-1.332-.574-.479-1.106-1.02-1.727-1.424-.4-.26-.919-.364-1.4-.46-.7-.139-.769-.197-.876-.885-.055-.35-.267-.677-.301-1.026a11.49 11.49 0 01-.03-1.81c.027-.427-.17-.588-.527-.59-.341 0-.685.114-1.023.094-.373-.023-.773-.073-1.103-.232-.85-.411-1.569-1.073-2.542-1.266-.622-.123-1.224-.353-1.835-.533-.37-.109-.613-.364-.642-.73-.066-.833-.075-1.671-.121-2.508-.015-.266-.07-.53-.107-.794-.3.058-.605.096-.896.182-.141.042-.266.163-.38.27-.366.345-.787.546-1.299.567-.89.037-1.609.34-1.961 1.249-.045.116-.305.22-.46.212a34.172 34.172 0 01-2.654-.234c-.153-.02-.384-.336-.379-.508.023-.628.127-1.254.21-1.88.013-.103.075-.2.114-.3-.024-.045-.05-.09-.075-.134-.234.12-.52.191-.693.371-.333.347-.596.76-.898 1.137-.39.489-.492.452-.832-.049-.145-.214-.454-.34-.714-.445-.18-.072-.401-.034-.604-.053-.367-.035-.57-.227-.563-.611.002-.14-.003-.281-.003-.421.001-.895-.103-1.062-.942-1.39-.305-.12-.42-.322-.339-.62.065-.24.153-.476.26-.7.459-.956.885-1.931 1.409-2.851.26-.459.673-.85 1.077-1.203.44-.383 1-.395 1.56-.276.105.023.217.025.325.037 1.355.135 1.831-.288 1.853-1.66.005-.25.01-.505-.037-.748-.139-.707-.029-1.335.374-1.958.38-.59.278-.889-.344-1.333-.429-.306-.755-.614-.714-1.208.023-.336.12-.505.443-.605.385-.118.752-.293 1.127-.444l-.006-.211c-.313-.144-.641-.264-.937-.44-.264-.156-.492-.373-.736-.563.268-.135.522-.33.806-.392a56.77 56.77 0 013.172-.61c.19-.031.445.099.613.229.192.148.293.412.481.568.354.294.726.575 1.121.81.287.17.615.292.941.371.271.067.612.141.84.036 1.049-.48 1.929-1.204 2.707-2.053a.776.776 0 00.125-.196c.018-.04.01-.09.023-.26-.31 0-.607-.01-.903.002-.302.012-.403-.078-.454-.416-.056-.376-.258-.759-.487-1.071-.227-.308-.572-.526-.86-.79-.312-.288-.297-.495.114-.575.364-.07.763-.001 1.14.055.768.114 1.528.332 2.298.373.658.036 1.33-.098 1.992-.19.513-.071.81-.434 1.019-.879.193-.41.49-.63.97-.56.294.043.44.18.448.488.013.534.042 1.062.514 1.449.079.065.07.299.03.433-.152.507-.339 1.004-.504 1.508-.242.74-.16.985.524 1.378.997.574 2.039.497 3.08.142.546-.186 1.076-.414 1.616-.615.435-.162.679-.474.78-.919.12-.52.282-.622.785-.453.294.1.573.246.853.382.379.184.744.398 1.129.565 1.065.46 1.538.332 2.273-.585.322-.402.62-.826.973-1.199.447-.472.89-.473 1.335.004.317.34.575.737.845 1.119.415.583.77 1.21 1.445 1.568.11.058.187.392.122.515a1.81 1.81 0 01-.571.631c-.282.188-.515.314-.365.73.049.133-.097.39-.223.524-.386.409-.82.77-1.208 1.177-.463.483-.954.956-1.326 1.505-.228.338-.322.806-.352 1.223-.026.37.253.504.576.304a7.326 7.326 0 001.03-.803c1.153-1.044 2.989-1.521 4.585-1.15-.24.3-.466.589-.697.872-.182.222-.116.38.097.543.596.455 1.465.28 1.905-.424.147-.233.226-.511.315-.776.285-.846.627-.917 1.228-.244.177.198.329.418.512.61.193.204.38.447.622.557.223.102.568.15.77.047.39-.199.621-.088.833.216.385.553.75 1.117.79 1.822.01.164.053.327.198.537.176-.259.346-.521.529-.775.522-.725.79-.768 1.462-.172.605.536 1.23.906 2.098.833.614-.05 1.246.06 1.866.128.7.076 1.22.47 1.597 1.04.311.467.588.957.866 1.445.444.78 1.102 1.255 1.98 1.439.458.096.913.206 1.364.333.875.247 1.362.839 1.491 1.733.175 1.213.157 2.402-.34 3.547z"></path>
      </mask>
      <path
        fill="#E8491E"
        stroke="#fff"
        strokeWidth="0.6"
        d="M63.975 22.346c-.187-2.488-1.312-3.858-3.74-4.446-.197-.048-.394-.109-.594-.127-.504-.045-.802-.318-1.036-.756-.293-.55-.62-1.088-.995-1.585-.727-.965-1.704-1.549-2.917-1.686a23.062 23.062 0 00-2.009-.157 1.273 1.273 0 01-.874-.356c-.637-.57-1.36-.927-2.247-.902-.146.005-.33-.137-.439-.261-.472-.533-1.024-.983-1.737-1.008-.564-.02-.888-.267-1.246-.643-.923-.967-2.157-1.271-3.142-.7-.612.356-1.15.103-1.787.142.158-.248.272-.412.372-.586.687-1.207.486-2.82-.516-3.476-.496-.325-.82-.745-1.136-1.208-.246-.36-.492-.725-.777-1.055-1.492-1.72-3.52-1.704-4.996.033-.25.294-.483.603-.698.873-.77-.333-1.477-.714-2.229-.946-1.238-.383-2.465.067-3.005 1.102-.38.725-1.071.777-1.75 1.104.044-.199.06-.288.083-.374.246-.91.287-1.785-.35-2.582-.095-.12-.094-.323-.122-.489-.137-.83-.503-1.51-1.278-1.907-1.378-.705-2.962-.317-3.905.906-.15.195-.452.38-.685.381-.664.002-1.33-.077-1.992-.155-.738-.085-1.48-.33-2.207-.282-1.648.11-2.729 1.53-2.395 2.992.159.692.617 1.175 1.141 1.615.151.126.278.282.416.424l-.15.17c-.202-.152-.451-.267-.598-.46-.869-1.154-1.965-1.65-3.4-1.26-.105.029-.215.037-.322.061-1.127.25-2.283.411-3.372.772-1.478.491-1.99 1.717-1.495 3.19.045.137.05.3.032.446-.144 1.107-.18 2.188.647 3.093.055.06.1.166.092.243-.082.714-.178 1.428-.276 2.182-.003 0-.094.005-.185 0-1.939-.119-3.174 1.042-4.12 2.475C1.321 18.226.841 19.471.313 20.67c-.496 1.126-.52 2.673.805 3.565.123.083.187.304.211.47.115.793.383 1.532 1.116 1.909.78.4 1.543.854 2.33 1.206.713.317 1.507.44 2.133.98.148.129.408.154.621.175.977.098 1.953.208 2.932.255 1.035.05 1.892-.31 2.47-1.23.099-.157.33-.231.556-.38.07.282.11.43.144.581.227 1.01.697 1.855 1.692 2.273.644.27 1.328.445 1.99.679.48.17.965.336 1.423.556.762.367 1.377 1.042 2.3 1.083.087.004.216.164.244.272.135.527.197 1.078.374 1.589.169.49.34 1.064.705 1.377.489.418 1.137.722 1.766.883.57.146.967.443 1.387.813-.052.082-.089.148-.133.21-.771 1.075-.974 2.241-.578 3.511.053.172.068.371.043.55-.25 1.834.467 3.073 2.176 3.796.16.068.293.272.376.444.206.432.375.882.562 1.324.048.112.164.225.154.328-.095.892.213 1.65.708 2.25-.734.734-1.467 1.41-2.124 2.154-.251.286-.326.726-.485 1.094-.095.217-.15.471-.301.64-1.031 1.155-.876 2.733.385 3.638.693.496 1.43.936 2.086 1.475.542.445 1.128.834.853 1.812-.33 1.179.218 2.207 1.138 2.735.914.525 2.064.384 3.014-.379.721-.58 1.216-1.332 1.614-2.157.076-.157.19-.336.336-.411.619-.32 1.071-.796 1.443-1.372.094-.146.24-.298.397-.356 1.131-.42 1.643-1.267 1.765-2.424.023-.221.132-.477.288-.633.681-.681 1.2-1.465 1.373-2.406.194-1.053.276-2.126.417-3.262.903.157 1.63-.396 2.401-.832.175-.099.36-.178.547-.252.564-.221 1.16-.38 1.688-.668.529-.289 1.004-.324 1.558-.114 1.29.492 2.467.215 3.315-.872.474-.607.854-1.307 1.163-2.016.267-.612.6-1.09 1.183-1.433 1.102-.653 1.804-1.621 1.86-2.917a5.635 5.635 0 01.985-2.972c.07-.103.117-.221.17-.334.34-.713.602-1.438.484-2.252-.07-.486-.009-.947.31-1.36.108-.141.123-.351.208-.516.058-.114.141-.257.25-.301.982-.405 1.397-1.24 1.676-2.176.125-.417.3-.763.737-.956a16.417 16.417 0 001.496-.775c.88-.502 1.57-1.203 1.962-2.14.673-1.614 1.097-3.274.963-5.055zm-2.589 3.084c-.067.155-.087.33-.132.496-.222.809-.688 1.427-1.436 1.822-.593.314-1.183.636-1.786.93-.497.24-.797.629-.98 1.134-.145.396-.272.803-.467 1.173-.112.213-.343.365-.52.544-.178-.195-.36-.384-.53-.585-.048-.056-.04-.16-.086-.215-.118-.14-.254-.266-.383-.398-.084.185-.236.367-.24.553-.014.512.069 1.028.048 1.54-.014.328-.048.731-.24.962-.568.677-.487 1.434-.478 2.218.005.448-.11.908-.242 1.341-.093.307-.29.587-.467.862-.515.794-.8 1.661-.802 2.604-.002.911-.356 1.589-1.17 2.026-.835.449-1.373 1.133-1.696 2.035-.202.565-.528 1.093-.847 1.608-.227.366-.568.484-1.014.3-1.124-.463-2.209-.39-3.28.234-.433.252-.96.34-1.438.519a4.182 4.182 0 00-.734.343c-.54.334-1.033.725-1.75.62-1.084-.157-2.184 1.254-2.054 2.29.106.846-.036 1.738-.166 2.595-.123.813-.642 1.416-1.353 1.822-.3.17-.426.38-.392.714.02.186.017.374.02.561.01.696-.022.701-.674.9-.25.076-.486.275-.673.47-.19.2-.33.456-.462.703-.31.587-.798.79-1.44.73-.63-.06-.743.082-.658.711.038.283.148.636.028.843-.269.463-.649.864-1.012 1.264-.08.088-.322.129-.417.07-.093-.056-.158-.28-.126-.403.105-.405.235-.806.4-1.191.376-.878.288-1.127-.55-1.542-.26-.13-.539-.291-.714-.514-.732-.931-1.696-1.543-2.715-2.094-.132-.072-.244-.18-.547-.406.276-.19.503-.323.704-.489.397-.328.62-.734.516-1.275-.018-.094-.009-.234.05-.295.688-.73 1.282-1.582 2.408-1.735.339-.047.677-.246.97-.441.426-.284.655-.68.568-1.239-.042-.263.047-.548.079-.853-.319-.04-.64-.075-.96-.123a2.611 2.611 0 01-.454-.107c-.914-.311-1.082-.91-.441-1.626.257-.287.56-.533.923-.874-.444 0-.792.01-1.138-.003-.68-.023-1.008-.414-.9-1.096.043-.275.159-.537.236-.806.161-.563-.057-.754-.63-.767a5.57 5.57 0 01-1.627-.295c-.492-.166-.574-.63-.563-1.123.012-.554.04-1.128-.09-1.657-.156-.638-.069-1.166.317-1.67.275-.36.57-.707.82-1.083.373-.564.305-.909-.203-1.332-.574-.479-1.106-1.02-1.727-1.424-.4-.26-.919-.364-1.4-.46-.7-.139-.769-.197-.876-.885-.055-.35-.267-.677-.301-1.026a11.49 11.49 0 01-.03-1.81c.027-.427-.17-.588-.527-.59-.341 0-.685.114-1.023.094-.373-.023-.773-.073-1.103-.232-.85-.411-1.569-1.073-2.542-1.266-.622-.123-1.224-.353-1.835-.533-.37-.109-.613-.364-.642-.73-.066-.833-.075-1.671-.121-2.508-.015-.266-.07-.53-.107-.794-.3.058-.605.096-.896.182-.141.042-.266.163-.38.27-.366.345-.787.546-1.299.567-.89.037-1.609.34-1.961 1.249-.045.116-.305.22-.46.212a34.172 34.172 0 01-2.654-.234c-.153-.02-.384-.336-.379-.508.023-.628.127-1.254.21-1.88.013-.103.075-.2.114-.3-.024-.045-.05-.09-.075-.134-.234.12-.52.191-.693.371-.333.347-.596.76-.898 1.137-.39.489-.492.452-.832-.049-.145-.214-.454-.34-.714-.445-.18-.072-.401-.034-.604-.053-.367-.035-.57-.227-.563-.611.002-.14-.003-.281-.003-.421.001-.895-.103-1.062-.942-1.39-.305-.12-.42-.322-.339-.62.065-.24.153-.476.26-.7.459-.956.885-1.931 1.409-2.851.26-.459.673-.85 1.077-1.203.44-.383 1-.395 1.56-.276.105.023.217.025.325.037 1.355.135 1.831-.288 1.853-1.66.005-.25.01-.505-.037-.748-.139-.707-.029-1.335.374-1.958.38-.59.278-.889-.344-1.333-.429-.306-.755-.614-.714-1.208.023-.336.12-.505.443-.605.385-.118.752-.293 1.127-.444l-.006-.211c-.313-.144-.641-.264-.937-.44-.264-.156-.492-.373-.736-.563.268-.135.522-.33.806-.392a56.77 56.77 0 013.172-.61c.19-.031.445.099.613.229.192.148.293.412.481.568.354.294.726.575 1.121.81.287.17.615.292.941.371.271.067.612.141.84.036 1.049-.48 1.929-1.204 2.707-2.053a.776.776 0 00.125-.196c.018-.04.01-.09.023-.26-.31 0-.607-.01-.903.002-.302.012-.403-.078-.454-.416-.056-.376-.258-.759-.487-1.071-.227-.308-.572-.526-.86-.79-.312-.288-.297-.495.114-.575.364-.07.763-.001 1.14.055.768.114 1.528.332 2.298.373.658.036 1.33-.098 1.992-.19.513-.071.81-.434 1.019-.879.193-.41.49-.63.97-.56.294.043.44.18.448.488.013.534.042 1.062.514 1.449.079.065.07.299.03.433-.152.507-.339 1.004-.504 1.508-.242.74-.16.985.524 1.378.997.574 2.039.497 3.08.142.546-.186 1.076-.414 1.616-.615.435-.162.679-.474.78-.919.12-.52.282-.622.785-.453.294.1.573.246.853.382.379.184.744.398 1.129.565 1.065.46 1.538.332 2.273-.585.322-.402.62-.826.973-1.199.447-.472.89-.473 1.335.004.317.34.575.737.845 1.119.415.583.77 1.21 1.445 1.568.11.058.187.392.122.515a1.81 1.81 0 01-.571.631c-.282.188-.515.314-.365.73.049.133-.097.39-.223.524-.386.409-.82.77-1.208 1.177-.463.483-.954.956-1.326 1.505-.228.338-.322.806-.352 1.223-.026.37.253.504.576.304a7.326 7.326 0 001.03-.803c1.153-1.044 2.989-1.521 4.585-1.15-.24.3-.466.589-.697.872-.182.222-.116.38.097.543.596.455 1.465.28 1.905-.424.147-.233.226-.511.315-.776.285-.846.627-.917 1.228-.244.177.198.329.418.512.61.193.204.38.447.622.557.223.102.568.15.77.047.39-.199.621-.088.833.216.385.553.75 1.117.79 1.822.01.164.053.327.198.537.176-.259.346-.521.529-.775.522-.725.79-.768 1.462-.172.605.536 1.23.906 2.098.833.614-.05 1.246.06 1.866.128.7.076 1.22.47 1.597 1.04.311.467.588.957.866 1.445.444.78 1.102 1.255 1.98 1.439.458.096.913.206 1.364.333.875.247 1.362.839 1.491 1.733.175 1.213.157 2.402-.34 3.547z"
        mask="url(#path-1-inside-1_1418_13)"
      ></path>
    </svg>
  );
}

function IconPedidos() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <mask id="path-1-inside-1_1523_1881" fill="#fff">
        <path
          fillRule="evenodd"
          d="M6.943 43.816l13.242 13.241c.43.43 1.13.43 1.56 0 .43-.43.43-1.13 0-1.56L8.504 42.255c-.43-.43-1.13-.43-1.56 0-.43.43-.43 1.13 0 1.56zM43.87 6.62l-1.772 1.774a16.553 16.553 0 01-11.705 4.848h-9.428a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h9.428a23.17 23.17 0 0016.386-6.787l1.773-1.772v.835a3.312 3.312 0 003.31 3.31 3.312 3.312 0 003.311-3.31V3.31A3.31 3.31 0 0051.863 0h-8.828a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h.835zm3.445-.322a1.103 1.103 0 00-.78-1.884h-3.5a1.104 1.104 0 010-2.207h8.827c.61 0 1.104.495 1.104 1.103v8.828a1.104 1.104 0 01-2.207 0v-3.5a1.103 1.103 0 00-1.884-.78l-3.657 3.656a20.964 20.964 0 01-14.824 6.141h-9.428a1.104 1.104 0 010-2.207h9.428c4.976 0 9.747-1.976 13.264-5.494l3.657-3.656z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M44.138 32V20.967c0-.879.35-1.72.97-2.34a3.307 3.307 0 012.34-.97h4.415c.878 0 1.72.348 2.34.97.621.62.97 1.461.97 2.34v6.62a5.524 5.524 0 017.212.512 5.523 5.523 0 010 7.805L49.145 49.144a5.522 5.522 0 01-3.902 1.615H29.415c-.878 0-1.72.35-2.34.97l-.782.78 1.427 1.427a3.309 3.309 0 010 4.681l-4.414 4.414a3.309 3.309 0 01-4.68 0L.97 45.376a3.309 3.309 0 010-4.681l4.414-4.414a3.309 3.309 0 014.68 0l.756.755 6.835-5.858V25.38a3.31 3.31 0 013.31-3.31h4.415a3.31 3.31 0 013.31 3.31v3.836c.428.145.846.32 1.254.522l.953.477V25.38a3.31 3.31 0 013.31-3.31h4.414a3.31 3.31 0 013.31 3.31v5.628c.8.164 1.553.501 2.207.993zM2.53 42.256l4.413-4.414a1.102 1.102 0 011.561 0L26.16 55.496c.432.43.432 1.13 0 1.56l-4.413 4.415c-.43.431-1.13.431-1.561 0L2.53 43.815a1.102 1.102 0 010-1.56zm22.203 8.694L12.386 38.6l6.818-5.843a7.72 7.72 0 015.026-1.86h1.273a7.74 7.74 0 013.454.814l1.619.81c.765.382 1.61.582 2.466.582h7.786c.878 0 1.72.349 2.34.97a3.31 3.31 0 01-2.34 5.65H27.587a1.104 1.104 0 000 2.208h15.827a1.1 1.1 0 00.78-.324l11.95-11.948a3.31 3.31 0 014.68 4.68L47.583 47.583c-.62.622-1.462.97-2.34.97H29.415a5.52 5.52 0 00-3.902 1.616l-.78.78zm28.233-21.234l-6.62 6.62v-15.37a1.1 1.1 0 011.103-1.104h4.414a1.101 1.101 0 011.103 1.104v8.75zm-13.242 1.181h-6.62V25.38c0-.609.494-1.104 1.103-1.104h4.414c.609 0 1.103.495 1.103 1.104v5.517zM26.483 28.74v-3.36c0-.609-.495-1.104-1.104-1.104h-4.413c-.61 0-1.104.495-1.104 1.104v4.325a9.925 9.925 0 014.369-1.014h1.272c.328 0 .655.017.98.05z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill="#E8491E"
        fillRule="evenodd"
        d="M6.943 43.816l13.242 13.241c.43.43 1.13.43 1.56 0 .43-.43.43-1.13 0-1.56L8.504 42.255c-.43-.43-1.13-.43-1.56 0-.43.43-.43 1.13 0 1.56zM43.87 6.62l-1.772 1.774a16.553 16.553 0 01-11.705 4.848h-9.428a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h9.428a23.17 23.17 0 0016.386-6.787l1.773-1.772v.835a3.312 3.312 0 003.31 3.31 3.312 3.312 0 003.311-3.31V3.31A3.31 3.31 0 0051.863 0h-8.828a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h.835zm3.445-.322a1.103 1.103 0 00-.78-1.884h-3.5a1.104 1.104 0 010-2.207h8.827c.61 0 1.104.495 1.104 1.103v8.828a1.104 1.104 0 01-2.207 0v-3.5a1.103 1.103 0 00-1.884-.78l-3.657 3.656a20.964 20.964 0 01-14.824 6.141h-9.428a1.104 1.104 0 010-2.207h9.428c4.976 0 9.747-1.976 13.264-5.494l3.657-3.656z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#E8491E"
        fillRule="evenodd"
        d="M44.138 32V20.967c0-.879.35-1.72.97-2.34a3.307 3.307 0 012.34-.97h4.415c.878 0 1.72.348 2.34.97.621.62.97 1.461.97 2.34v6.62a5.524 5.524 0 017.212.512 5.523 5.523 0 010 7.805L49.145 49.144a5.522 5.522 0 01-3.902 1.615H29.415c-.878 0-1.72.35-2.34.97l-.782.78 1.427 1.427a3.309 3.309 0 010 4.681l-4.414 4.414a3.309 3.309 0 01-4.68 0L.97 45.376a3.309 3.309 0 010-4.681l4.414-4.414a3.309 3.309 0 014.68 0l.756.755 6.835-5.858V25.38a3.31 3.31 0 013.31-3.31h4.415a3.31 3.31 0 013.31 3.31v3.836c.428.145.846.32 1.254.522l.953.477V25.38a3.31 3.31 0 013.31-3.31h4.414a3.31 3.31 0 013.31 3.31v5.628c.8.164 1.553.501 2.207.993zM2.53 42.256l4.413-4.414a1.102 1.102 0 011.561 0L26.16 55.496c.432.43.432 1.13 0 1.56l-4.413 4.415c-.43.431-1.13.431-1.561 0L2.53 43.815a1.102 1.102 0 010-1.56zm22.203 8.694L12.386 38.6l6.818-5.843a7.72 7.72 0 015.026-1.86h1.273a7.74 7.74 0 013.454.814l1.619.81c.765.382 1.61.582 2.466.582h7.786c.878 0 1.72.349 2.34.97a3.31 3.31 0 01-2.34 5.65H27.587a1.104 1.104 0 000 2.208h15.827a1.1 1.1 0 00.78-.324l11.95-11.948a3.31 3.31 0 014.68 4.68L47.583 47.583c-.62.622-1.462.97-2.34.97H29.415a5.52 5.52 0 00-3.902 1.616l-.78.78zm28.233-21.234l-6.62 6.62v-15.37a1.1 1.1 0 011.103-1.104h4.414a1.101 1.101 0 011.103 1.104v8.75zm-13.242 1.181h-6.62V25.38c0-.609.494-1.104 1.103-1.104h4.414c.609 0 1.103.495 1.103 1.104v5.517zM26.483 28.74v-3.36c0-.609-.495-1.104-1.104-1.104h-4.413c-.61 0-1.104.495-1.104 1.104v4.325a9.925 9.925 0 014.369-1.014h1.272c.328 0 .655.017.98.05z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth="0.6"
        d="M6.943 43.816l13.242 13.241c.43.43 1.13.43 1.56 0 .43-.43.43-1.13 0-1.56L8.504 42.255c-.43-.43-1.13-.43-1.56 0-.43.43-.43 1.13 0 1.56zM43.87 6.62l-1.772 1.774a16.553 16.553 0 01-11.705 4.848h-9.428a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h9.428a23.17 23.17 0 0016.386-6.787l1.773-1.772v.835a3.312 3.312 0 003.31 3.31 3.312 3.312 0 003.311-3.31V3.31A3.31 3.31 0 0051.863 0h-8.828a3.312 3.312 0 00-3.31 3.31 3.312 3.312 0 003.31 3.31h.835zm3.445-.322a1.103 1.103 0 00-.78-1.884h-3.5a1.104 1.104 0 010-2.207h8.827c.61 0 1.104.495 1.104 1.103v8.828a1.104 1.104 0 01-2.207 0v-3.5a1.103 1.103 0 00-1.884-.78l-3.657 3.656a20.964 20.964 0 01-14.824 6.141h-9.428a1.104 1.104 0 010-2.207h9.428c4.976 0 9.747-1.976 13.264-5.494l3.657-3.656z"
        clipRule="evenodd"
        mask="url(#path-1-inside-1_1523_1881)"
      ></path>
      <path
        fillRule="evenodd"
        stroke="#fff"
        strokeWidth="0.6"
        d="M44.138 32V20.967c0-.879.35-1.72.97-2.34a3.307 3.307 0 012.34-.97h4.415c.878 0 1.72.348 2.34.97.621.62.97 1.461.97 2.34v6.62a5.524 5.524 0 017.212.512 5.523 5.523 0 010 7.805L49.145 49.144a5.522 5.522 0 01-3.902 1.615H29.415c-.878 0-1.72.35-2.34.97l-.782.78 1.427 1.427a3.309 3.309 0 010 4.681l-4.414 4.414a3.309 3.309 0 01-4.68 0L.97 45.376a3.309 3.309 0 010-4.681l4.414-4.414a3.309 3.309 0 014.68 0l.756.755 6.835-5.858V25.38a3.31 3.31 0 013.31-3.31h4.415a3.31 3.31 0 013.31 3.31v3.836c.428.145.846.32 1.254.522l.953.477V25.38a3.31 3.31 0 013.31-3.31h4.414a3.31 3.31 0 013.31 3.31v5.628c.8.164 1.553.501 2.207.993zM2.53 42.256l4.413-4.414a1.102 1.102 0 011.561 0L26.16 55.496c.432.43.432 1.13 0 1.56l-4.413 4.415c-.43.431-1.13.431-1.561 0L2.53 43.815a1.102 1.102 0 010-1.56zm22.203 8.694L12.386 38.6l6.818-5.843a7.72 7.72 0 015.026-1.86h1.273a7.74 7.74 0 013.454.814l1.619.81c.765.382 1.61.582 2.466.582h7.786c.878 0 1.72.349 2.34.97a3.31 3.31 0 01-2.34 5.65H27.587a1.104 1.104 0 000 2.208h15.827a1.1 1.1 0 00.78-.324l11.95-11.948a3.31 3.31 0 014.68 4.68L47.583 47.583c-.62.622-1.462.97-2.34.97H29.415a5.52 5.52 0 00-3.902 1.616l-.78.78zm28.233-21.234l-6.62 6.62v-15.37a1.1 1.1 0 011.103-1.104h4.414a1.101 1.101 0 011.103 1.104v8.75zm-13.242 1.181h-6.62V25.38c0-.609.494-1.104 1.103-1.104h4.414c.609 0 1.103.495 1.103 1.104v5.517zM26.483 28.74v-3.36c0-.609-.495-1.104-1.104-1.104h-4.413c-.61 0-1.104.495-1.104 1.104v4.325a9.925 9.925 0 014.369-1.014h1.272c.328 0 .655.017.98.05z"
        clipRule="evenodd"
        mask="url(#path-1-inside-1_1523_1881)"
      ></path>
    </svg>
  );
}

function IconRepre() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        fill="#E8491E"
        d="M32 22.95c-5.495 0-9.963 4.06-9.963 9.049 0 2.467 1.095 4.705 2.864 6.34.016.017.03.031.048.047 1.806 1.644 4.3 2.664 7.052 2.664 2.756 0 5.253-1.021 7.057-2.67l.036-.036c1.77-1.635 2.869-3.875 2.869-6.345 0-4.99-4.469-9.049-9.963-9.049zm0 1.31c4.699 0 8.522 3.472 8.522 7.739 0 1.811-.693 3.476-1.846 4.797-.77-.941-2.012-1.572-3.85-1.924.871-.71 1.433-1.728 1.433-2.873 0-2.133-1.91-3.868-4.26-3.868-2.348 0-4.259 1.735-4.259 3.868 0 1.145.562 2.163 1.436 2.873-1.84.352-3.081.983-3.85 1.924-1.154-1.32-1.847-2.984-1.847-4.797-.001-4.267 3.822-7.74 8.52-7.74zm0 10.299c-1.555 0-2.819-1.15-2.819-2.56 0-1.411 1.264-2.56 2.819-2.56 1.553 0 2.818 1.149 2.818 2.56 0 1.41-1.265 2.56-2.818 2.56zm-5.675 3.199c.572-.87 1.87-1.691 5.675-1.888 3.807.198 5.105 1.017 5.676 1.887-1.51 1.229-3.496 1.984-5.676 1.984s-4.168-.754-5.675-1.983z"
      ></path>
      <path
        fill="#E8491E"
        d="M61.13 50.702c1.772-1.635 2.87-3.876 2.87-6.347 0-4.81-4.153-8.742-9.37-9.024v-6.673c2.465-.16 4.687-1.132 6.334-2.633a.559.559 0 00.042-.043c1.77-1.634 2.864-3.872 2.864-6.34 0-4.99-4.47-9.05-9.961-9.05-2.5 0-4.781.848-6.534 2.235l-5.507-2.59c.056-.39.095-.784.095-1.187C41.963 4.059 37.493 0 32 0c-5.493 0-9.963 4.06-9.963 9.05 0 .403.039.797.095 1.186l-5.51 2.59c-1.751-1.386-4.03-2.232-6.53-2.232-5.494 0-9.962 4.06-9.962 9.05 0 2.469 1.096 4.707 2.867 6.342l.042.041c1.646 1.5 3.868 2.472 6.333 2.633v6.673C4.154 35.613 0 39.547 0 44.356c0 2.469 1.097 4.708 2.868 6.343l.043.042c1.804 1.645 4.3 2.665 7.053 2.665 2.577 0 4.92-.9 6.69-2.364l5.503 2.589c-.07.432-.119.869-.119 1.32 0 2.468 1.097 4.707 2.868 6.342.014.015.027.028.043.042C26.753 62.98 29.25 64 32.003 64c2.755 0 5.254-1.022 7.058-2.67.013-.01.023-.022.033-.033 1.772-1.635 2.87-3.875 2.87-6.347 0-.449-.047-.887-.118-1.32l5.503-2.587c1.771 1.462 4.113 2.363 6.69 2.363 2.755 0 5.253-1.023 7.057-2.67.012-.01.022-.023.034-.034zm1.429-6.347c0 1.811-.693 3.475-1.846 4.796-.77-.942-2.011-1.573-3.849-1.923.872-.71 1.434-1.728 1.434-2.873 0-2.134-1.91-3.868-4.261-3.868-2.349 0-4.258 1.734-4.258 3.868 0 1.145.56 2.163 1.432 2.871-1.838.352-3.08.983-3.85 1.925-1.153-1.321-1.846-2.985-1.846-4.796 0-4.269 3.823-7.741 8.522-7.741 4.7 0 8.522 3.474 8.522 7.74zm-8.522 2.56c-1.553 0-2.817-1.148-2.817-2.559 0-1.411 1.264-2.559 2.817-2.559 1.555 0 2.82 1.148 2.82 2.559 0 1.411-1.265 2.559-2.82 2.559zm-.128-24.71c-1.554 0-2.819-1.149-2.819-2.56 0-1.412 1.265-2.56 2.819-2.56 1.553 0 2.818 1.148 2.818 2.56 0 1.411-1.265 2.56-2.818 2.56zm0 1.31c3.803.196 5.102 1.016 5.674 1.886-1.508 1.227-3.494 1.983-5.674 1.983s-4.168-.756-5.675-1.983c.57-.87 1.87-1.69 5.675-1.887zm8.52-3.87c0 1.812-.693 3.475-1.844 4.796-.771-.941-2.012-1.572-3.85-1.923.871-.71 1.433-1.727 1.433-2.871 0-2.134-1.91-3.87-4.26-3.87-2.348 0-4.259 1.736-4.259 3.87 0 1.144.56 2.162 1.433 2.871-1.838.351-3.08.982-3.85 1.924-1.152-1.319-1.845-2.984-1.845-4.795 0-4.269 3.823-7.741 8.522-7.741s8.52 3.47 8.52 7.74zM32 1.31c4.7 0 8.522 3.473 8.522 7.741a7 7 0 01-.141 1.364.56.56 0 00-.032.192c-.272 1.206-.86 2.308-1.671 3.24-.77-.941-2.012-1.572-3.85-1.923.872-.71 1.433-1.728 1.433-2.872 0-2.133-1.91-3.869-4.261-3.869-2.349 0-4.26 1.736-4.26 3.87 0 1.143.561 2.162 1.434 2.871-1.838.35-3.08.982-3.85 1.924-.813-.932-1.4-2.033-1.673-3.24a.589.589 0 00-.032-.19 7.014 7.014 0 01-.141-1.366c0-4.27 3.823-7.742 8.522-7.742zm0 10.3c-1.555 0-2.819-1.148-2.819-2.559 0-1.412 1.264-2.56 2.819-2.56s2.82 1.148 2.82 2.56c0 1.411-1.265 2.559-2.82 2.559zm0 1.31c3.806.197 5.104 1.017 5.676 1.886-1.51 1.228-3.496 1.983-5.676 1.983s-4.167-.754-5.676-1.983c.572-.869 1.869-1.688 5.676-1.886zm-21.907-1.017c4.697 0 8.52 3.473 8.52 7.741 0 1.812-.693 3.475-1.846 4.796-.77-.941-2.011-1.572-3.849-1.923.872-.71 1.434-1.728 1.434-2.872 0-2.133-1.91-3.869-4.26-3.869-2.348 0-4.259 1.736-4.259 3.87 0 1.143.56 2.162 1.434 2.871-1.839.35-3.08.982-3.85 1.924-1.152-1.32-1.846-2.984-1.846-4.796 0-4.27 3.823-7.742 8.522-7.742zm0 15.482c-2.182 0-4.168-.754-5.676-1.983.57-.87 1.869-1.69 5.676-1.886 3.802.196 5.102 1.017 5.674 1.886-1.508 1.228-3.493 1.983-5.674 1.983zm0-5.18c-1.555 0-2.819-1.149-2.819-2.56 0-1.412 1.264-2.56 2.819-2.56s2.818 1.148 2.818 2.56c0 1.411-1.265 2.56-2.818 2.56zm-.13 14.409c4.698 0 8.52 3.472 8.52 7.74 0 1.812-.693 3.476-1.845 4.797-.771-.942-2.012-1.573-3.85-1.925.874-.708 1.434-1.726 1.434-2.871 0-2.134-1.91-3.868-4.259-3.868s-4.26 1.734-4.26 3.868c0 1.145.561 2.163 1.434 2.871-1.84.352-3.08.983-3.85 1.926-1.153-1.32-1.846-2.986-1.846-4.797 0-4.267 3.823-7.741 8.522-7.741zm0 10.3c-1.555 0-2.819-1.147-2.819-2.558 0-1.411 1.264-2.559 2.819-2.559s2.819 1.148 2.819 2.559c0 1.411-1.264 2.559-2.819 2.559zm-5.676 3.199c.57-.87 1.869-1.689 5.676-1.887 3.804.198 5.104 1.017 5.676 1.887-1.509 1.227-3.494 1.984-5.676 1.984s-4.167-.755-5.676-1.984zm22.037 10.594c.57-.87 1.869-1.689 5.676-1.886 3.807.197 5.105 1.017 5.676 1.886-1.51 1.229-3.496 1.984-5.676 1.984s-4.167-.755-5.676-1.984zm5.676-3.2c-1.555 0-2.819-1.147-2.819-2.558 0-1.411 1.264-2.559 2.819-2.559s2.82 1.148 2.82 2.559c0 1.411-1.265 2.559-2.82 2.559zm6.676 2.238c-.77-.941-2.012-1.572-3.849-1.924.872-.708 1.434-1.727 1.434-2.872 0-2.134-1.91-3.868-4.261-3.868-2.349 0-4.26 1.734-4.26 3.868 0 1.145.561 2.164 1.434 2.872-1.84.352-3.08.983-3.85 1.925-1.153-1.32-1.846-2.986-1.846-4.797 0-4.268 3.823-7.74 8.522-7.74 4.7 0 8.522 3.472 8.522 7.74 0 1.812-.693 3.475-1.846 4.796zM32 45.899c-4.48 0-8.279 2.702-9.526 6.406l-4.783-2.249c1.395-1.557 2.233-3.542 2.233-5.7 0-4.729-4.015-8.617-9.11-9.01V28.66c2.465-.161 4.688-1.134 6.334-2.634a.384.384 0 00.041-.041c1.77-1.635 2.865-3.872 2.865-6.34 0-2.227-.895-4.266-2.367-5.844l4.75-2.233c.467 1.46 1.323 2.767 2.468 3.824l.041.042c1.806 1.645 4.3 2.664 7.054 2.664 2.755 0 5.251-1.02 7.055-2.667.014-.012.026-.026.039-.038 1.144-1.056 2.002-2.365 2.468-3.825l4.75 2.235c-1.473 1.578-2.368 3.616-2.368 5.843 0 2.468 1.097 4.708 2.868 6.341l.04.042c1.647 1.5 3.87 2.471 6.335 2.632v6.685c-5.097.392-9.114 4.281-9.114 9.01 0 2.16.84 4.146 2.236 5.702l-4.783 2.249c-1.248-3.706-5.046-6.409-9.526-6.409zm16.361 4.215c.57-.87 1.87-1.691 5.675-1.888 3.807.198 5.105 1.017 5.676 1.887-1.51 1.229-3.496 1.984-5.676 1.984s-4.166-.755-5.675-1.983z"
      ></path>
    </svg>
  );
}

function IconVendas() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        fill="#E8491E"
        stroke="#fff"
        strokeWidth="0.3"
        d="M61.933 41.931v-.15H38.631a.953.953 0 010-1.907h23.152a2.055 2.055 0 012.055 2.057v3.31a2.058 2.058 0 01-2.055 2.057h-2.355v3.61h2.355a2.055 2.055 0 012.055 2.057v3.31a2.06 2.06 0 01-.288 1.028l-.045.076.045.077c.185.31.284.666.288 1.027v3.31a2.058 2.058 0 01-2.055 2.057H36.624a.953.953 0 010-1.907h25.31v-3.61H40.55a.953.953 0 010-1.907h21.383v-3.61H41.938a.953.953 0 010-1.907h15.585v-3.61h-16.18a.953.953 0 010-1.908h20.59v-3.46zM15.478 29.643h-.025a5.361 5.361 0 01-4.618-2.683h0a5.37 5.37 0 010-5.368h0a5.361 5.361 0 014.644-2.683h0a5.283 5.283 0 013.463 1.287l.094.081.097-.076 6.99-5.518.097-.076-.056-.11a5.371 5.371 0 01.197-5.246h0a5.36 5.36 0 019.15 0h0a5.371 5.371 0 01.238 5.165h-.34l.34.267 6.99 5.518.097.076.094-.08a5.23 5.23 0 015.358-.913l.115.046.067-.103 6.284-9.689.067-.102-.088-.086A5.37 5.37 0 0155.78.885a5.36 5.36 0 017.885 3.233 5.374 5.374 0 01-.923 4.668 5.362 5.362 0 01-4.265 2.098 5.283 5.283 0 01-1.886-.375l-.114-.046-.067.104-6.273 9.688-.067.102.087.086a5.373 5.373 0 01.421 7.161 5.36 5.36 0 01-3.307 1.948h0a5.356 5.356 0 01-3.761-.763l-.08.126.08-.126a5.365 5.365 0 01-1.933-6.907l.054-.11-.096-.074-6.99-5.518-.097-.077-.094.082a5.237 5.237 0 01-6.88 0l-.094-.082-.098.077-6.99 5.518-.096.075.055.11a5.37 5.37 0 01-.233 5.206 5.36 5.36 0 01-4.54 2.554zM60.921 3.07a3.456 3.456 0 00-5.903 2.447 3.456 3.456 0 106.915 0c0-.917-.364-1.798-1.012-2.447zM48.793 21.83a3.457 3.457 0 00-5.902 2.447 3.457 3.457 0 106.915 0c0-.918-.364-1.798-1.013-2.447zM33.36 9.69a3.456 3.456 0 00-5.903 2.447 3.457 3.457 0 106.915 0c0-.918-.364-1.798-1.012-2.447zM17.924 21.829a3.457 3.457 0 00-5.902 2.447 3.463 3.463 0 003.457 3.46 3.457 3.457 0 003.457-3.46c0-.918-.364-1.798-1.012-2.447zM19.271 44.623h0a8.664 8.664 0 0112.26 0h0a8.68 8.68 0 010 12.271h0a8.664 8.664 0 01-12.26 0h0a8.68 8.68 0 010-12.271zm1.347 10.923h0a6.764 6.764 0 009.567 0h0a6.775 6.775 0 000-9.575h0a6.763 6.763 0 00-9.567 0h0a6.775 6.775 0 000 9.575z"
      ></path>
      <path
        fill="#E8491E"
        stroke="#fff"
        strokeWidth="0.3"
        d="M16.152 41.502a13.074 13.074 0 0118.498 0 13.097 13.097 0 010 18.514 13.073 13.073 0 01-18.498 0 13.097 13.097 0 010-18.514zM17.5 58.666a11.17 11.17 0 0015.804 0 11.19 11.19 0 000-15.817 11.17 11.17 0 00-15.804 0 11.19 11.19 0 000 15.817z"
      ></path>
      <path
        fill="#E8491E"
        stroke="#fff"
        strokeWidth="0.3"
        d="M26.353 46.345v.15h1.253a.953.953 0 010 1.907h-2.757a.701.701 0 100 1.403H25.967a2.619 2.619 0 012.388 1.078c.546.761.646 1.755.26 2.61a2.62 2.62 0 01-2.127 1.53l-.135.014v.135a.953.953 0 11-1.905 0v-.15h-1.252a.953.953 0 010-1.907h2.756a.701.701 0 100-1.403H24.834a2.619 2.619 0 01-2.388-1.078 2.625 2.625 0 011.867-4.14l.135-.014v-.135a.953.953 0 111.905 0zM13.242 37.367h.032a6.758 6.758 0 012.582.508.952.952 0 001.237-.515.954.954 0 00-.515-1.239h0a8.409 8.409 0 00-3.303-.66h-.001a8.668 8.668 0 00-6.481 2.918l6.449-1.012zm0 0h0m0 0h0m0 0a6.761 6.761 0 00-5.028 2.277 6.774 6.774 0 001.203 10.057.952.952 0 01-1.085 1.564 8.679 8.679 0 01-3.662-6.097l-.149.018.15-.018a8.684 8.684 0 012.122-6.789l6.449-1.012z"
      ></path>
      <path
        fill="#E8491E"
        stroke="#fff"
        strokeWidth="0.3"
        d="M9.921 54.818l.304.097-.024-.06c.37.18.596.584.532 1.012h0a.965.965 0 01-1.088.813 13.085 13.085 0 01-8.447-7.455 13.102 13.102 0 01.478-11.271 13.08 13.08 0 019.057-6.715h0a13.07 13.07 0 0110.912 2.829h0c.405.337.46.94.124 1.345h0a.953.953 0 01-1.343.124h0a11.169 11.169 0 00-16.927 3.27 11.192 11.192 0 00-.56 9.52l.14-.055-.14.055a11.18 11.18 0 006.982 6.491z"
      ></path>
    </svg>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 0 2rem 0 2rem;
  margin: 6.8rem auto 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  row-gap: 3rem;
  flex-wrap: wrap;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    width: 16rem;
    max-height: 17rem;

    .info {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50%;

      span:nth-child(1) {
        font-size: 1.1rem;
        color: #5c6476;
        max-width: 100%;
      }

      span:nth-child(2) {
        word-break: break-all;
        font-weight: bold;
        font-size: 1.5rem;
        color: #e8491e;
      }

      span:nth-child(3) {
        font-size: 1rem;
        color: #5c6476;
        max-width: 14.5rem;
        font-weight: 400;
      }
    }

    @media (max-width: 425px) {
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;

      .info {
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

export default function Cases({ dataInformation, seo, dataCase }: any) {
  const { information } = dataInformation.data;
  const cases = dataCase.data.cases;

  return (
    <>
      <Seo seo={seo} />
      <HeaderCase client={information.linkClient} />
      <Container>
        <div className="box">
          <IconRepre />
          <div className="info">
            <span>mais de</span>
            <span>20 mil representantes/vendedores</span>
            <span>usando Mercanet</span>
          </div>
        </div>
        <div className="box">
          <IconMap />
          <div className="info">
            <span>mais de</span>
            <span>800 clientes</span>
            <span>sendo atendidos pela solução Mercanet</span>
          </div>
        </div>
        <div className="box">
          <IconPedidos />
          <div className="info">
            <span>mais de</span>
            <span>100 mil pedidos</span>
            <span>que o Mercanet opera por dia</span>
          </div>
        </div>
        <div className="box">
          <IconVendas />
          <div className="info">
            <span>mais de</span>
            <span>12 bilhões em vendas</span>
            <span>por mês feito através do Mercanet</span>
          </div>
        </div>
      </Container>
      {cases?.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Case data={item} />
            <Depositions data={item.depositions} />
          </div>
        );
      })}
      <Footer data={information} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const dataInformation = (await getInformation()) || [];
  const seo = (await getSeo(`/cases`)) || [];
  const dataCase = (await getCase()) || [];

  return {
    props: { dataInformation, seo, dataCase },
    revalidate: 10,
  };
};