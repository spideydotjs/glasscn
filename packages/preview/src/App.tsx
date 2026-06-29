import React, { useState, useEffect } from 'react';
import {
  LayoutGrid, PanelsLeftRight, Navigation, Sidebar, PanelRight,
  MousePointerClick, Text, AlignJustify, ToggleLeft, CheckSquare,
  CircleDot, SlidersHorizontal, LayoutTemplate,
  MessageSquareWarning, Bell, AlertCircle, AlertTriangle, Info, CheckCircle2, XCircle, Tag, BarChart2,
  NotebookTabs, Link, ChevronLeft, ChevronDown, UserCircle, Table,
  ListCollapse, CalendarDays, Sun, Moon, Layers,
  Copy, Check, Menu, X
} from 'lucide-react';

const componentCodes = (import.meta as any).glob('../../../components/**/*.tsx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const componentStyles = (import.meta as any).glob('../../../components/**/*.css', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

// Simple syntax highlighter
function highlightCode(code: string, lang: 'tsx' | 'css' | 'bash') {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokens: string[] = [];
  const pushToken = (content: string, className: string) => {
    tokens.push(`<span class="${className}">${content}</span>`);
    return `___TOKEN_${tokens.length - 1}___`;
  };

  if (lang === 'tsx') {
    // Comments
    html = html.replace(/(\/\/.*)/g, (_, comment) => pushToken(comment, 'code-comment'));
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g, (_, comment) => pushToken(comment, 'code-comment'));
    // Strings
    html = html.replace(/(["`])(.*?)\1/g, (_, quote, str) => pushToken(quote + str + quote, 'code-string'));
    html = html.replace(/'(.*?)'/g, (_, str) => pushToken("'" + str + "'", 'code-string'));
    // Keywords
    html = html.replace(/\b(import|export|const|let|var|return|function|interface|extends|type|default|from|false|true|null|undefined|as|typeof|instanceof|switch|case|break)\b/g, (match) => pushToken(match, 'code-keyword'));
    // React Components / Class Names
    html = html.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, (match) => pushToken(match, 'code-type'));
    // Functions
    html = html.replace(/\b([a-zA-Z0-9_]+)(?=\s*\()/g, (match) => pushToken(match, 'code-function'));
  } else if (lang === 'css') {
    // Comments
    html = html.replace(/(\/\*[\s\S]*?\*\/)/g, (_, comment) => pushToken(comment, 'code-comment'));
    // Class names & selectors
    html = html.replace(/(\.[a-zA-Z0-9_-]+)/g, (match) => pushToken(match, 'code-class'));
    // CSS Variables
    html = html.replace(/(--[a-zA-Z0-9_-]+)/g, (match) => pushToken(match, 'code-variable'));
    // Properties
    html = html.replace(/\b([a-zA-Z-]+)\s*:/g, (_, prop) => pushToken(prop, 'code-property') + ':');
  } else if (lang === 'bash') {
    // Keywords / Commands
    html = html.replace(/\b(npx|npm|git|add|init)\b/g, (match) => pushToken(match, 'code-keyword'));
    // Strings
    html = html.replace(/(["`])(.*?)\1/g, (_, quote, str) => pushToken(quote + str + quote, 'code-string'));
    html = html.replace(/'(.*?)'/g, (_, str) => pushToken("'" + str + "'", 'code-string'));
  }

  // Restore tokens in reverse order
  for (let i = tokens.length - 1; i >= 0; i--) {
    html = html.replace(`___TOKEN_${i}___`, tokens[i]);
  }

  return html;
}

// Generate dynamic usage code snippets based on component controls state
function getUsageCode(
  componentId: string,
  glassStyle: string,
  state: {
    buttonVariant: string;
    buttonSize: string;
    inputValue: string;
    inputError: string;
    checkboxChecked: boolean;
    radioValue: string;
    toggleChecked: boolean;
    sliderValue: number;
    alertVariant: string;
    badgeVariant: string;
    progressValue: number;
    activeTab: string;
    currentPage: number;
    drawerPos: string;
  }
): string {
  switch (componentId) {
    case 'glass-card':
      return `import { GlassCard } from '@/components/glass-card';
import { GlassButton } from '@/components/glass-button';

export default function CardExample() {
  return (
    <GlassCard
      glass="${glassStyle}"
      header={<div>Glass Card Header</div>}
      footer={
        <>
          <GlassButton glass="${glassStyle}" size="sm">Cancel</GlassButton>
          <GlassButton glass="${glassStyle}" size="sm" variant="outline">Action</GlassButton>
        </>
      }
    >
      <p style={{ margin: 0 }}>
        A customizable card component with glassmorphic backdrop-filter properties.
      </p>
    </GlassCard>
  );
}`;

    case 'glass-panel':
      return `import { GlassPanel } from '@/components/glass-panel';

export default function PanelExample() {
  return (
    <GlassPanel 
      glass="${glassStyle}" 
      title="Dashboard Panel" 
      description="Explore glass panel styling variants"
    >
      <p style={{ margin: 0 }}>
        Glass panels serve as primary layout containers with fluid borders and rounded shapes.
      </p>
    </GlassPanel>
  );
}`;

    case 'glass-navbar':
      return `import { GlassNavbar } from '@/components/glass-navbar';
import { GlassButton } from '@/components/glass-button';

export default function NavbarExample() {
  return (
    <GlassNavbar
      glass="${glassStyle}"
      brand={<span style={{ fontWeight: 800, letterSpacing: '0.05em' }}>GLASSIFY</span>}
      links={
        <>
          <a href="#home">Home</a>
          <a href="#docs">Docs</a>
          <a href="#about">About</a>
        </>
      }
      actions={<GlassButton glass="${glassStyle}" size="sm">Get Started</GlassButton>}
    />
  );
}`;

    case 'glass-sidebar':
      return `import { GlassSidebar } from '@/components/glass-sidebar';

export default function SidebarExample() {
  return (
    <div style={{ display: 'flex', height: '340px', width: '100%' }}>
      <GlassSidebar
        glass="${glassStyle}"
        header={<div style={{ fontWeight: 800, fontSize: '1rem' }}>Glassify Portal</div>}
        footer={<span style={{ fontSize: '0.75rem', opacity: 0.5 }}>v0.1.0-alpha</span>}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {['Dashboard', 'Analytics', 'Components', 'Settings'].map((item) => (
            <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem 0.75rem', borderRadius: '6px', background: 'var(--glass-primary)', fontSize: '0.875rem' }}>{item}</a>
          ))}
        </div>
      </GlassSidebar>
    </div>
  );
}`;

    case 'glass-drawer':
      return `import { useState } from 'react';
import { GlassDrawer } from '@/components/glass-drawer';
import { GlassButton } from '@/components/glass-button';

export default function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${glassStyle}" onClick={() => setIsOpen(true)}>
        Open Drawer
      </GlassButton>
      
      <GlassDrawer 
        glass="${glassStyle}" 
        position="${state.drawerPos}" 
        isOpen={isOpen} 
        title="${state.drawerPos.toUpperCase()} DRAWER"
      >
        <p>Slide-in glass drawer panel component.</p>
        <GlassButton glass="${glassStyle}" size="sm" onClick={() => setIsOpen(false)}>
          Dismiss
        </GlassButton>
      </GlassDrawer>
    </>
  );
}`;

    case 'glass-button':
      return `import { GlassButton } from '@/components/glass-button';

export default function ButtonExample() {
  return (
    <GlassButton 
      glass="${glassStyle}" 
      variant="${state.buttonVariant}" 
      size="${state.buttonSize}"
    >
      Click Me
    </GlassButton>
  );
}`;

    case 'glass-input':
      return `import { useState } from 'react';
import { GlassInput } from '@/components/glass-input';

export default function InputExample() {
  const [value, setValue] = useState('${state.inputValue}');

  return (
    <GlassInput 
      glass="${glassStyle}" 
      label="Email Address" 
      placeholder="you@glassify.dev" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      error="${state.inputError}"
    />
  );
}`;

    case 'glass-textarea':
      return `import { GlassTextarea } from '@/components/glass-textarea';

export default function TextareaExample() {
  return (
    <GlassTextarea 
      glass="${glassStyle}" 
      label="Project Notes" 
      placeholder="Type your notes here..." 
      rows={4} 
    />
  );
}`;

    case 'glass-select':
      return `import { GlassSelect } from '@/components/glass-select';

export default function SelectExample() {
  return (
    <GlassSelect 
      glass="${glassStyle}" 
      label="Glass Style Variant" 
      options={[
        { label: 'Frosted — Classic blur', value: 'frosted' },
        { label: 'Liquid — Crystal clear', value: 'liquid' },
        { label: 'Matte — Heavy satin', value: 'matte' },
      ]} 
    />
  );
}`;

    case 'glass-checkbox':
      return `import { useState } from 'react';
import { GlassCheckbox } from '@/components/glass-checkbox';

export default function CheckboxExample() {
  const [checked, setChecked] = useState(${state.checkboxChecked});

  return (
    <GlassCheckbox 
      glass="${glassStyle}" 
      label="Enable liquid glow reflections on hover" 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
}`;

    case 'glass-radio':
      return `import { useState } from 'react';
import { GlassRadio } from '@/components/glass-radio';

export default function RadioExample() {
  const [value, setValue] = useState('${state.radioValue}');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <GlassRadio 
        glass="${glassStyle}" 
        label="Frosted Glass" 
        name="radio-group" 
        checked={value === 'one'} 
        onChange={() => setValue('one')} 
      />
      <GlassRadio 
        glass="${glassStyle}" 
        label="Liquid Glass" 
        name="radio-group" 
        checked={value === 'two'} 
        onChange={() => setValue('two')} 
      />
    </div>
  );
}`;

    case 'glass-toggle':
      return `import { useState } from 'react';
import { GlassToggle } from '@/components/glass-toggle';

export default function ToggleExample() {
  const [checked, setChecked] = useState(${state.toggleChecked});

  return (
    <GlassToggle 
      glass="${glassStyle}" 
      label="Enable experimental liquid mode" 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} 
    />
  );
}`;

    case 'glass-slider':
      return `import { useState } from 'react';
import { GlassSlider } from '@/components/glass-slider';

export default function SliderExample() {
  const [value, setValue] = useState(${state.sliderValue});

  return (
    <GlassSlider 
      glass="${glassStyle}" 
      label={\`Blur Intensity: \${value}px\`} 
      min="0" 
      max="100" 
      value={value} 
      onChange={(e) => setValue(Number(e.target.value))} 
    />
  );
}`;

    case 'glass-modal':
      return `import { useState } from 'react';
import { GlassModal } from '@/components/glass-modal';
import { GlassButton } from '@/components/glass-button';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${glassStyle}" onClick={() => setIsOpen(true)}>
        Launch Modal
      </GlassButton>
      
      <GlassModal 
        glass="${glassStyle}" 
        isOpen={isOpen} 
        title="System Notification" 
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <GlassButton glass="${glassStyle}" size="sm" onClick={() => setIsOpen(false)}>Close</GlassButton>
            <GlassButton glass="${glassStyle}" size="sm" variant="outline">Confirm</GlassButton>
          </>
        }
      >
        <p>This modal renders inside a backdrop blur overlay layer.</p>
      </GlassModal>
    </>
  );
}`;

    case 'glass-tooltip':
      return `import { GlassTooltip } from '@/components/glass-tooltip';

export default function TooltipExample() {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <GlassTooltip glass="${glassStyle}" content="Top tooltip" position="top">
        <span style={{ cursor: 'help', textDecoration: 'underline dashed' }}>Hover top</span>
      </GlassTooltip>
      <GlassTooltip glass="${glassStyle}" content="Bottom tooltip" position="bottom">
        <span style={{ cursor: 'help', textDecoration: 'underline dashed' }}>Hover bottom</span>
      </GlassTooltip>
    </div>
  );
}`;

    case 'glass-toast':
      return `import { useState } from 'react';
import { GlassToast } from '@/components/glass-toast';
import { GlassButton } from '@/components/glass-button';

export default function ToastExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassButton glass="${glassStyle}" onClick={() => setIsOpen(true)}>
        Show Toast
      </GlassButton>
      
      <GlassToast 
        glass="${glassStyle}" 
        isOpen={isOpen} 
        title="Component Added" 
        description="glass-button has been added to the registry." 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}`;

    case 'glass-alert':
      return `import { GlassAlert } from '@/components/glass-alert';

export default function AlertExample() {
  return (
    <GlassAlert 
      glass="${glassStyle}" 
      variant="${state.alertVariant}" 
      title="${state.alertVariant.charAt(0).toUpperCase() + state.alertVariant.slice(1)} Alert"
      icon="${state.alertVariant === 'info' ? 'ℹ️' : state.alertVariant === 'warning' ? '⚠️' : state.alertVariant === 'error' ? '❌' : '✅'}"
    >
      Glass alerts support inline status signals with customizable severity.
    </GlassAlert>
  );
}`;

    case 'glass-badge':
      return `import { GlassBadge } from '@/components/glass-badge';

export default function BadgeExample() {
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <GlassBadge glass="${glassStyle}" variant="${state.badgeVariant}">Active</GlassBadge>
      <GlassBadge glass="${glassStyle}" variant="${state.badgeVariant}">Stable</GlassBadge>
    </div>
  );
}`;

    case 'glass-progress':
      return `import { GlassProgress } from '@/components/glass-progress';

export default function ProgressExample() {
  return (
    <GlassProgress glass="${glassStyle}" value={${state.progressValue}} />
  );
}`;

    case 'glass-tabs':
      return `import { useState } from 'react';
import { GlassTabs } from '@/components/glass-tabs';

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('${state.activeTab}');

  return (
    <GlassTabs 
      glass="${glassStyle}"
      items={[
        { id: 'tab-1', label: 'Overview' }, 
        { id: 'tab-2', label: 'API Params' }, 
        { id: 'tab-3', label: 'Registry' }
      ]}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
    />
  );
}`;

    case 'glass-breadcrumb':
      return `import { GlassBreadcrumb } from '@/components/glass-breadcrumb';

export default function BreadcrumbExample() {
  return (
    <GlassBreadcrumb glass="${glassStyle}">
      <a href="#">src</a>
      <a href="#">components</a>
      <span>glass-button</span>
    </GlassBreadcrumb>
  );
}`;

    case 'glass-pagination':
      return `import { useState } from 'react';
import { GlassPagination } from '@/components/glass-pagination';

export default function PaginationExample() {
  const [page, setPage] = useState(${state.currentPage});

  return (
    <GlassPagination 
      glass="${glassStyle}" 
      currentPage={page} 
      totalPages={5} 
      onPageChange={setPage} 
    />
  );
}`;

    case 'glass-dropdown-menu':
      return `import { useState } from 'react';
import { GlassDropdownMenu } from '@/components/glass-dropdown-menu';
import { GlassButton } from '@/components/glass-button';

export default function DropdownExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassDropdownMenu 
      glass="${glassStyle}" 
      isOpen={isOpen}
      trigger={
        <GlassButton glass="${glassStyle}" onClick={() => setIsOpen(!isOpen)}>
          Open Menu
        </GlassButton>
      }
      items={[
        { label: 'Download Package', onClick: () => console.log('Downloading') },
        { label: 'Copy Config', disabled: true },
        { label: 'Reset State', onClick: () => console.log('Reset') },
      ]}
    />
  );
}`;

    case 'glass-avatar':
      return `import { GlassAvatar } from '@/components/glass-avatar';

export default function AvatarExample() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <GlassAvatar 
        glass="${glassStyle}" 
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
        fallback="JD" 
        size="lg" 
      />
      <GlassAvatar glass="${glassStyle}" fallback="UN" size="md" />
    </div>
  );
}`;

    case 'glass-table':
      return `import { GlassTable } from '@/components/glass-table';
import { GlassBadge } from '@/components/glass-badge';

export default function TableExample() {
  return (
    <GlassTable glass="${glassStyle}" headers={['Component', 'Status', 'Category']}>
      <tr>
        <td>glass-button</td>
        <td><GlassBadge glass="${glassStyle}">Stable</GlassBadge></td>
        <td>Inputs</td>
      </tr>
      <tr>
        <td>glass-modal</td>
        <td><GlassBadge glass="${glassStyle}">Stable</GlassBadge></td>
        <td>Overlay</td>
      </tr>
    </GlassTable>
  );
}`;

    case 'glass-accordion':
      return `import { useState } from 'react';
import { GlassAccordion } from '@/components/glass-accordion';

export default function AccordionExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassAccordion 
      glass="${glassStyle}" 
      title="Is glassmorphism responsive cross-device?" 
      isOpen={isOpen} 
      onToggle={() => setIsOpen(!isOpen)}
    >
      Yes — glass style variants rely on modern backdrop-filter and opacity channels.
    </GlassAccordion>
  );
}`;

    case 'glass-calendar':
      return `import { GlassCalendar } from '@/components/glass-calendar';

export default function CalendarExample() {
  return (
    <GlassCalendar glass="${glassStyle}" />
  );
}`;

    default:
      return '';
  }
}


// Components
import { GlassCard } from '@/components/glass-card';
import { GlassPanel } from '@/components/glass-panel';
import { GlassNavbar } from '@/components/glass-navbar';
import { GlassSidebar } from '@/components/glass-sidebar';
import { GlassDrawer } from '@/components/glass-drawer';
import { GlassButton } from '@/components/glass-button';
import { GlassInput } from '@/components/glass-input';
import { GlassTextarea } from '@/components/glass-textarea';
import { GlassSelect } from '@/components/glass-select';
import { GlassCheckbox } from '@/components/glass-checkbox';
import { GlassRadio } from '@/components/glass-radio';
import { GlassToggle } from '@/components/glass-toggle';
import { GlassSlider } from '@/components/glass-slider';
import { GlassModal } from '@/components/glass-modal';
import { GlassTooltip } from '@/components/glass-tooltip';
import { GlassToast } from '@/components/glass-toast';
import { GlassAlert } from '@/components/glass-alert';
import { GlassBadge } from '@/components/glass-badge';
import { GlassProgress } from '@/components/glass-progress';
import { GlassTabs } from '@/components/glass-tabs';
import { GlassBreadcrumb } from '@/components/glass-breadcrumb';
import { GlassPagination } from '@/components/glass-pagination';
import { GlassDropdownMenu } from '@/components/glass-dropdown-menu';
import { GlassAvatar } from '@/components/glass-avatar';
import { GlassTable } from '@/components/glass-table';
import { GlassAccordion } from '@/components/glass-accordion';
import { GlassCalendar } from '@/components/glass-calendar';

type GlassStyle = 'frosted' | 'liquid' | 'matte';

interface ComponentDefinition {
  id: string;
  name: string;
  category: 'layout' | 'inputs' | 'feedback' | 'navigation' | 'display';
  icon: React.ReactNode;
}

const COMPONENTS: ComponentDefinition[] = [
  { id: 'glass-card', name: 'Card', category: 'layout', icon: <LayoutGrid size={14} /> },
  { id: 'glass-panel', name: 'Panel', category: 'layout', icon: <PanelsLeftRight size={14} /> },
  { id: 'glass-navbar', name: 'Navbar', category: 'layout', icon: <Navigation size={14} /> },
  { id: 'glass-sidebar', name: 'Sidebar', category: 'layout', icon: <Sidebar size={14} /> },
  { id: 'glass-drawer', name: 'Drawer', category: 'layout', icon: <PanelRight size={14} /> },
  { id: 'glass-button', name: 'Button', category: 'inputs', icon: <MousePointerClick size={14} /> },
  { id: 'glass-input', name: 'Input', category: 'inputs', icon: <Text size={14} /> },
  { id: 'glass-textarea', name: 'Textarea', category: 'inputs', icon: <AlignJustify size={14} /> },
  { id: 'glass-select', name: 'Select', category: 'inputs', icon: <ChevronDown size={14} /> },
  { id: 'glass-checkbox', name: 'Checkbox', category: 'inputs', icon: <CheckSquare size={14} /> },
  { id: 'glass-radio', name: 'Radio', category: 'inputs', icon: <CircleDot size={14} /> },
  { id: 'glass-toggle', name: 'Toggle', category: 'inputs', icon: <ToggleLeft size={14} /> },
  { id: 'glass-slider', name: 'Slider', category: 'inputs', icon: <SlidersHorizontal size={14} /> },
  { id: 'glass-modal', name: 'Modal', category: 'feedback', icon: <LayoutTemplate size={14} /> },
  { id: 'glass-tooltip', name: 'Tooltip', category: 'feedback', icon: <MessageSquareWarning size={14} /> },
  { id: 'glass-toast', name: 'Toast', category: 'feedback', icon: <Bell size={14} /> },
  { id: 'glass-alert', name: 'Alert', category: 'feedback', icon: <AlertCircle size={14} /> },
  { id: 'glass-badge', name: 'Badge', category: 'feedback', icon: <Tag size={14} /> },
  { id: 'glass-progress', name: 'Progress', category: 'feedback', icon: <BarChart2 size={14} /> },
  { id: 'glass-tabs', name: 'Tabs', category: 'navigation', icon: <NotebookTabs size={14} /> },
  { id: 'glass-breadcrumb', name: 'Breadcrumb', category: 'navigation', icon: <Link size={14} /> },
  { id: 'glass-pagination', name: 'Pagination', category: 'navigation', icon: <ChevronLeft size={14} /> },
  { id: 'glass-dropdown-menu', name: 'Dropdown', category: 'navigation', icon: <ChevronDown size={14} /> },
  { id: 'glass-avatar', name: 'Avatar', category: 'display', icon: <UserCircle size={14} /> },
  { id: 'glass-table', name: 'Table', category: 'display', icon: <Table size={14} /> },
  { id: 'glass-accordion', name: 'Accordion', category: 'display', icon: <ListCollapse size={14} /> },
  { id: 'glass-calendar', name: 'Calendar', category: 'display', icon: <CalendarDays size={14} /> },
];

const CATEGORIES = [
  { id: 'layout', label: 'Layout' },
  { id: 'inputs', label: 'Forms' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'display', label: 'Display' },
] as const;

export default function App() {
  const [selectedComp, setSelectedComp] = useState<string>('glass-button');
  const [glassStyle, setGlassStyle] = useState<GlassStyle>('frosted');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Interactive UI states
  const [buttonVariant, setButtonVariant] = useState<'solid' | 'outline' | 'ghost'>('solid');
  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [inputValue, setInputValue] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(true);
  const [radioValue, setRadioValue] = useState<string>('one');
  const [toggleChecked, setToggleChecked] = useState<boolean>(true);
  const [sliderValue, setSliderValue] = useState<number>(65);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [alertVariant, setAlertVariant] = useState<'info' | 'warning' | 'error' | 'success'>('info');
  const [badgeVariant, setBadgeVariant] = useState<'default' | 'secondary' | 'outline'>('default');
  const [progressValue, setProgressValue] = useState<number>(45);
  const [activeTab, setActiveTab] = useState<string>('tab-1');
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerPos, setDrawerPos] = useState<'left' | 'right' | 'top' | 'bottom'>('right');

  // Code preview & copy states
  const [codeTab, setCodeTab] = useState<'cli' | 'tsx' | 'css' | 'usage'>('cli');
  const [copiedState, setCopiedState] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const tsxKey = `../../../components/${selectedComp}/index.tsx`;
  const cssKey = `../../../components/${selectedComp}/styles.css`;
  const tsxCode = componentCodes[tsxKey] || '';
  const cssCode = componentStyles[cssKey] || '';
  const hasCss = !!cssCode;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedState(id);
      setTimeout(() => {
        setCopiedState(null);
      }, 2000);
    });
  };

  const getActiveCodeText = () => {
    switch (codeTab) {
      case 'cli':
        return `npx glasscn add ${selectedComp}`;
      case 'tsx':
        return tsxCode;
      case 'css':
        return cssCode;
      case 'usage':
        return getUsageCode(selectedComp, glassStyle, {
          buttonVariant,
          buttonSize,
          inputValue,
          inputError,
          checkboxChecked,
          radioValue,
          toggleChecked,
          sliderValue,
          alertVariant,
          badgeVariant,
          progressValue,
          activeTab,
          currentPage,
          drawerPos
        });
      default:
        return '';
    }
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const currentComp = COMPONENTS.find((c) => c.id === selectedComp);

  const renderComponent = () => {
    switch (selectedComp) {
      case 'glass-card':
        return (
          <GlassCard
            glass={glassStyle}
            header={<div>Glass Card Header</div>}
            footer={
              <>
                <GlassButton glass={glassStyle} size="sm">Cancel</GlassButton>
                <GlassButton glass={glassStyle} size="sm" variant="outline">Action</GlassButton>
              </>
            }
          >
            <p style={{ margin: 0 }}>A customizable card component with glassmorphic backdrop-filter properties. The frosted blur, saturation, and border adapt to the selected glass style variant.</p>
          </GlassCard>
        );

      case 'glass-panel':
        return (
          <GlassPanel glass={glassStyle} title="Dashboard Panel" description="Explore glass panel styling variants">
            <p style={{ margin: 0 }}>Glass panels serve as primary layout containers. Built with fluid borders, rounded shapes, and adaptive glass styles to match any design system.</p>
          </GlassPanel>
        );

      case 'glass-navbar':
        return (
          <div style={{ width: '100%', minHeight: '150px', position: 'relative' }}>
            <GlassNavbar
              glass={glassStyle}
              brand={<span style={{ fontWeight: 800, letterSpacing: '0.05em' }}>GLASSIFY</span>}
              links={
                <>
                  <a href="#home">Home</a>
                  <a href="#docs">Docs</a>
                  <a href="#about">About</a>
                </>
              }
              actions={<GlassButton glass={glassStyle} size="sm">Get Started</GlassButton>}
            />
            <div style={{ padding: '3rem 1.5rem 1rem', textAlign: 'center', fontSize: '0.875rem', opacity: 0.5 }}>
              Sticky navbar with backdrop blur. Scroll context highlights the glass filter.
            </div>
          </div>
        );

      case 'glass-sidebar':
        return (
          <div style={{ display: 'flex', border: '1px solid var(--glass-border-frosted)', borderRadius: '12px', overflow: 'hidden', height: '340px', width: '100%' }}>
            <GlassSidebar
              glass={glassStyle}
              header={<div style={{ fontWeight: 800, fontSize: '1rem' }}>Glassify Portal</div>}
              footer={<span style={{ fontSize: '0.75rem', opacity: 0.5 }}>v0.1.0-alpha</span>}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {['Dashboard', 'Analytics', 'Components', 'Settings'].map((item) => (
                  <a key={item} href="#" style={{ color: 'inherit', textDecoration: 'none', padding: '0.5rem 0.75rem', borderRadius: '6px', background: 'var(--glass-primary)', fontSize: '0.875rem' }}>{item}</a>
                ))}
              </div>
            </GlassSidebar>
            <div style={{ flex: 1, padding: '2rem', fontSize: '0.875rem', opacity: 0.6, display: 'flex', alignItems: 'center' }}>
              Sidebar with fluid glass border and adaptive layout sizing.
            </div>
          </div>
        );

      case 'glass-drawer':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(['left', 'right', 'top', 'bottom'] as const).map((pos) => (
                <GlassButton key={pos} glass={glassStyle} size="sm" variant={drawerPos === pos ? 'solid' : 'outline'} onClick={() => setDrawerPos(pos)}>
                  {pos}
                </GlassButton>
              ))}
            </div>
            <GlassButton glass={glassStyle} onClick={() => setIsDrawerOpen(true)}>Open Drawer</GlassButton>
            <GlassDrawer glass={glassStyle} position={drawerPos} isOpen={isDrawerOpen} title={`${drawerPos.toUpperCase()} DRAWER`}>
              <p>Slide-in glass drawer panel component.</p>
              <GlassButton glass={glassStyle} size="sm" onClick={() => setIsDrawerOpen(false)}>Dismiss</GlassButton>
            </GlassDrawer>
          </div>
        );

      case 'glass-button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <GlassButton glass={glassStyle} variant={buttonVariant} size={buttonSize}>Click Me</GlassButton>
              <GlassButton glass={glassStyle} variant={buttonVariant} size={buttonSize} disabled>Disabled</GlassButton>
            </div>
            <div className="preview-prop-controls">
              <div className="preview-control-group">
                <label>Variant</label>
                <div className="preview-segmented-control mini">
                  {(['solid', 'outline', 'ghost'] as const).map((v) => (
                    <button key={v} className={`preview-segmented-btn ${buttonVariant === v ? 'preview-segmented-btn-active' : ''}`} onClick={() => setButtonVariant(v)}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="preview-control-group">
                <label>Size</label>
                <div className="preview-segmented-control mini">
                  {(['sm', 'md', 'lg'] as const).map((s) => (
                    <button key={s} className={`preview-segmented-btn ${buttonSize === s ? 'preview-segmented-btn-active' : ''}`} onClick={() => setButtonSize(s)}>
                      {s.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'glass-input':
        return (
          <div style={{ width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <GlassInput glass={glassStyle} label="Email Address" placeholder="you@glassify.dev" value={inputValue} onChange={(e) => setInputValue(e.target.value)} error={inputError} />
            <GlassButton glass={glassStyle} size="sm" variant="outline" onClick={() => setInputError(inputError ? '' : 'Please enter a valid email')}>
              Toggle Error State
            </GlassButton>
          </div>
        );

      case 'glass-textarea':
        return (
          <div style={{ width: '100%', maxWidth: '420px' }}>
            <GlassTextarea glass={glassStyle} label="Project Notes" placeholder="Type your notes here..." rows={4} />
          </div>
        );

      case 'glass-select':
        return (
          <div style={{ width: '100%', maxWidth: '320px' }}>
            <GlassSelect glass={glassStyle} label="Glass Style Variant" options={[
              { label: 'Frosted — Classic blur', value: 'frosted' },
              { label: 'Liquid — Crystal clear', value: 'liquid' },
              { label: 'Matte — Heavy satin', value: 'matte' },
            ]} />
          </div>
        );

      case 'glass-checkbox':
        return (
          <GlassCheckbox glass={glassStyle} label="Enable liquid glow reflections on hover" checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />
        );

      case 'glass-radio':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Choose glass style variant:</span>
            {[['one', 'Frosted Glass'], ['two', 'Liquid Glass'], ['three', 'Matte Glass']].map(([val, label]) => (
              <GlassRadio key={val} glass={glassStyle} label={label} name="preview-radio" checked={radioValue === val} onChange={() => setRadioValue(val)} />
            ))}
          </div>
        );

      case 'glass-toggle':
        return <GlassToggle glass={glassStyle} label="Enable experimental liquid mode" checked={toggleChecked} onChange={(e) => setToggleChecked(e.target.checked)} />;

      case 'glass-slider':
        return (
          <div style={{ width: '100%', maxWidth: '340px' }}>
            <GlassSlider glass={glassStyle} label={`Blur Intensity: ${sliderValue}px`} min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))} />
          </div>
        );

      case 'glass-modal':
        return (
          <div style={{ textAlign: 'center' }}>
            <GlassButton glass={glassStyle} onClick={() => setIsModalOpen(true)}>Launch Modal</GlassButton>
            <GlassModal glass={glassStyle} isOpen={isModalOpen} title="System Notification" onClose={() => setIsModalOpen(false)}
              footer={<>
                <GlassButton glass={glassStyle} size="sm" onClick={() => setIsModalOpen(false)}>Close</GlassButton>
                <GlassButton glass={glassStyle} size="sm" variant="outline">Confirm</GlassButton>
              </>}
            >
              <p style={{ margin: 0 }}>This modal renders inside a backdrop blur overlay layer. The glass effect refracts the background shapes visible behind the dialog.</p>
            </GlassModal>
          </div>
        );

      case 'glass-tooltip':
        return (
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
            {(['top', 'bottom'] as const).map((pos) => (
              <GlassTooltip key={pos} glass={glassStyle} content={`${pos.charAt(0).toUpperCase() + pos.slice(1)} tooltip`} position={pos}>
                <span style={{ cursor: 'help', textDecoration: 'underline dashed', opacity: 0.8 }}>Hover {pos}</span>
              </GlassTooltip>
            ))}
          </div>
        );

      case 'glass-toast':
        return (
          <div style={{ textAlign: 'center' }}>
            <GlassButton glass={glassStyle} onClick={() => setIsToastOpen(true)}>Show Toast</GlassButton>
            <GlassToast glass={glassStyle} isOpen={isToastOpen} title="Component Added" description="glass-button has been added to the registry." onClose={() => setIsToastOpen(false)} />
          </div>
        );

      case 'glass-alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', maxWidth: '500px' }}>
            <GlassAlert glass={glassStyle} variant={alertVariant} title={`${alertVariant.charAt(0).toUpperCase() + alertVariant.slice(1)} Alert`}
              icon={alertVariant === 'info' ? 'ℹ️' : alertVariant === 'warning' ? '⚠️' : alertVariant === 'error' ? '❌' : '✅'}
            >
              Glass alerts support inline status signals with customizable severity.
            </GlassAlert>
            <div className="preview-prop-controls">
              <div className="preview-control-group">
                <label>Severity</label>
                <div className="preview-segmented-control mini">
                  {(['info', 'warning', 'error', 'success'] as const).map((v) => (
                    <button key={v} className={`preview-segmented-btn ${alertVariant === v ? 'preview-segmented-btn-active' : ''}`} onClick={() => setAlertVariant(v)}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'glass-badge':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <GlassBadge glass={glassStyle} variant={badgeVariant}>Active</GlassBadge>
              <GlassBadge glass={glassStyle} variant={badgeVariant}>Stable</GlassBadge>
              <GlassBadge glass={glassStyle} variant={badgeVariant}>v0.1.0</GlassBadge>
            </div>
            <div className="preview-prop-controls">
              <div className="preview-control-group">
                <label>Variant</label>
                <div className="preview-segmented-control mini">
                  {(['default', 'secondary', 'outline'] as const).map((v) => (
                    <button key={v} className={`preview-segmented-btn ${badgeVariant === v ? 'preview-segmented-btn-active' : ''}`} onClick={() => setBadgeVariant(v)}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'glass-progress':
        return (
          <div style={{ width: '100%', maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <GlassProgress glass={glassStyle} value={progressValue} />
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <GlassButton glass={glassStyle} size="sm" onClick={() => setProgressValue((v) => Math.max(0, v - 15))}>−15%</GlassButton>
              <GlassButton glass={glassStyle} size="sm" onClick={() => setProgressValue((v) => Math.min(100, v + 15))}>+15%</GlassButton>
            </div>
          </div>
        );

      case 'glass-tabs':
        return (
          <GlassTabs glass={glassStyle}
            items={[{ id: 'tab-1', label: 'Overview' }, { id: 'tab-2', label: 'API Params' }, { id: 'tab-3', label: 'Registry' }]}
            activeTab={activeTab}
            onChangeTab={setActiveTab}
          />
        );

      case 'glass-breadcrumb':
        return (
          <GlassBreadcrumb glass={glassStyle}>
            <a href="#">src</a>
            <a href="#">components</a>
            <span>glass-button</span>
          </GlassBreadcrumb>
        );

      case 'glass-pagination':
        return <GlassPagination glass={glassStyle} currentPage={currentPage} totalPages={5} onPageChange={setCurrentPage} />;

      case 'glass-dropdown-menu':
        return (
          <div style={{ minHeight: '160px' }}>
            <GlassDropdownMenu glass={glassStyle} isOpen={isDropdownOpen}
              trigger={<GlassButton glass={glassStyle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Open Menu</GlassButton>}
              items={[
                { label: 'Download Package', onClick: () => alert('Downloading...') },
                { label: 'Copy Config', disabled: true },
                { label: 'Reset State', onClick: () => alert('Reset') },
              ]}
            />
          </div>
        );

      case 'glass-avatar':
        return (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <GlassAvatar glass={glassStyle} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" fallback="JD" size="lg" />
            <GlassAvatar glass={glassStyle} fallback="UN" size="md" />
            <GlassAvatar glass={glassStyle} fallback="SM" size="sm" />
          </div>
        );

      case 'glass-table':
        return (
          <GlassTable glass={glassStyle} headers={['Component', 'Status', 'Category']}>
            <tr><td>glass-button</td><td><GlassBadge glass={glassStyle}>Stable</GlassBadge></td><td>Inputs</td></tr>
            <tr><td>glass-modal</td><td><GlassBadge glass={glassStyle}>Stable</GlassBadge></td><td>Overlay</td></tr>
            <tr><td>glass-drawer</td><td><GlassBadge glass={glassStyle} variant="secondary">Beta</GlassBadge></td><td>Layout</td></tr>
          </GlassTable>
        );

      case 'glass-accordion':
        return (
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <GlassAccordion glass={glassStyle} title="Is glassmorphism responsive cross-device?" isOpen={accordionOpen} onToggle={() => setAccordionOpen(!accordionOpen)}>
              Yes — glass style variants rely on modern backdrop-filter, opacity channels, and fallback settings ensuring responsive rendering on mobile and desktop.
            </GlassAccordion>
          </div>
        );

      case 'glass-calendar':
        return <GlassCalendar glass={glassStyle} />;

      default:
        return <div>Select a component</div>;
    }
  };

  return (
    <div className="preview-layout">

      {/* ── Rich Colored Background Blobs ── */}
      <div className="preview-blob-container">
        <div className="silver-blob blob-1" />
        <div className="silver-blob blob-2" />
        <div className="silver-blob blob-3" />
        <div className="silver-blob blob-4" />
        <div className="silver-blob blob-5" />
      </div>

      {/* ── Fine Grid ── */}
      <div className="preview-grid-bg">
        {Array.from({ length: 600 }).map((_, i) => (
          <div key={i} className="preview-grid-node">
            <span className="preview-grid-element" />
          </div>
        ))}
      </div>

      {/* Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <div className="app-sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`} data-glass={glassStyle}>
        {/* Logo */}
        <div className="app-sidebar-logo">
          <div className="app-logo-icon">
            <Layers size={18} />
          </div>
          <div>
            <div className="app-logo-title">Glassify</div>
            <div className="app-logo-sub">Component Library</div>
          </div>
        </div>

        {/* Style switcher */}
        <div className="app-style-switcher">
          {(['frosted', 'liquid', 'matte'] as GlassStyle[]).map((s) => (
            <button key={s} className={`app-style-btn ${glassStyle === s ? 'active' : ''}`} onClick={() => setGlassStyle(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* Nav */}
        <nav className="app-sidebar-nav">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="app-nav-group">
              <div className="app-nav-heading">{cat.label}</div>
              {COMPONENTS.filter((c) => c.category === cat.id).map((c) => (
                <button
                  key={c.id}
                  className={`app-nav-item ${selectedComp === c.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedComp(c.id);
                    setIsSidebarOpen(false);
                  }}
                >
                  <span className="app-nav-icon">{c.icon}</span>
                  {c.name}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="app-sidebar-footer">
          <span className="app-version">v0.1.0</span>
          <button className="app-theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="app-main">
        {/* Top bar */}
        <header className="app-topbar" data-glass={glassStyle}>
          <div className="app-topbar-left">
            <button 
              className="app-sidebar-toggle" 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle navigation menu"
            >
              {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <span className="app-topbar-icon">{currentComp?.icon}</span>
            <div>
              <h1 className="app-topbar-title">{currentComp?.name || 'Preview'}</h1>
              <span className="app-topbar-sub">{currentComp?.id}</span>
            </div>
          </div>
          <div className="app-topbar-right">
            <GlassBadge glass={glassStyle}>Stable</GlassBadge>
            <GlassBadge glass={glassStyle} variant="secondary">{glassStyle}</GlassBadge>
          </div>
        </header>

        {/* Content */}
        <section className="app-content split-layout">
          {/* Left Pane: Interactive Showcase */}
          <div className="layout-pane-preview">
            <div className="app-showcase" data-glass={glassStyle}>
              {renderComponent()}
            </div>
            <div className="showcase-info-help">
              Use the sidebar style switcher to toggle frosted, liquid, and matte glass presets.
            </div>
          </div>

          {/* Right Pane: Code Viewer */}
          <div className="layout-pane-code">
            <div className="code-viewer-shell" data-glass={glassStyle}>
              {/* Sub tabs for files */}
              <div className="code-subtabs">
                <button
                  className={`code-subtab-btn ${codeTab === 'cli' ? 'active' : ''}`}
                  onClick={() => setCodeTab('cli')}
                >
                  CLI
                </button>
                <button
                  className={`code-subtab-btn ${codeTab === 'tsx' ? 'active' : ''}`}
                  onClick={() => setCodeTab('tsx')}
                >
                  index.tsx
                </button>
                {hasCss && (
                  <button
                    className={`code-subtab-btn ${codeTab === 'css' ? 'active' : ''}`}
                    onClick={() => setCodeTab('css')}
                  >
                    styles.css
                  </button>
                )}
                <button
                  className={`code-subtab-btn ${codeTab === 'usage' ? 'active' : ''}`}
                  onClick={() => setCodeTab('usage')}
                >
                  Usage
                </button>
              </div>

              {/* Code viewer pane */}
              <div className="code-pane-container">
                <div className="code-pane-header">
                  <span className="code-pane-filename">
                    {codeTab === 'cli' && 'Terminal'}
                    {codeTab === 'tsx' && `${selectedComp}/index.tsx`}
                    {codeTab === 'css' && `${selectedComp}/styles.css`}
                    {codeTab === 'usage' && 'ExampleUsage.tsx'}
                  </span>
                  <button
                    className="code-copy-btn"
                    onClick={() => copyToClipboard(getActiveCodeText(), codeTab)}
                    aria-label="Copy code"
                  >
                    {copiedState === codeTab ? (
                      <>
                        <Check size={13} className="copy-btn-icon" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} className="copy-btn-icon" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="code-pane-body">
                  <pre>
                    <code
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(
                          getActiveCodeText(),
                          codeTab === 'css' ? 'css' : codeTab === 'cli' ? 'bash' : 'tsx'
                        )
                      }}
                    />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
