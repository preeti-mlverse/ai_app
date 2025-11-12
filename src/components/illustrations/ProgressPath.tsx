import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../config/theme';
import AnimatedCharacter from '../progress/AnimatedCharacter';

interface Checkpoint {
  id: string;
  title: string;
  completed: boolean;
  current: boolean;
}

interface ProgressPathProps {
  checkpoints: Checkpoint[];
  currentProgress: number;
}

export default function ProgressPath({ 
  checkpoints, 
  currentProgress 
}: ProgressPathProps) {
  const screenWidth = Dimensions.get('window').width;
  const pathWidth = screenWidth - 64;
  const characterPosition = (currentProgress / 100) * pathWidth;
  
  return (
    <View style={styles.container}>
      {/* Road/Path */}
      <View style={styles.path}>
        <View style={[styles.pathProgress, { width: `${currentProgress}%` }]} />
        <View style={styles.dashedLine} />
      </View>
      
      {/* Character on bicycle */}
      <View style={[styles.characterContainer, { left: characterPosition }]}>
        <AnimatedCharacter progress={currentProgress} size={60} />
      </View>
      
      {/* Checkpoints */}
      <View style={styles.checkpointsContainer}>
        {checkpoints.map((checkpoint, index) => {
          const checkpointPosition = (index / (checkpoints.length - 1)) * pathWidth;
          
          return (
            <View 
              key={checkpoint.id} 
              style={[styles.checkpoint, { left: checkpointPosition }]}
            >
              <View style={[
                styles.checkpointDot,
                checkpoint.completed && styles.checkpointCompleted,
                checkpoint.current && styles.checkpointCurrent,
              ]}>
                <Text style={styles.checkpointIcon}>
                  {checkpoint.completed ? '✓' : checkpoint.current ? '📍' : '○'}
                </Text>
              </View>
              <Text style={styles.checkpointLabel} numberOfLines={1}>
                {checkpoint.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    position: 'relative',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  path: {
    height: 60,
    backgroundColor: '#E5E7EB',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 40,
    position: 'relative',
  },
  pathProgress: {
    height: '100%',
    backgroundColor: theme.colors.primary + '30',
    borderRadius: 30,
  },
  dashedLine: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 2,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#9CA3AF',
  },
  characterContainer: {
    position: 'absolute',
    top: 10,
    transform: [{ translateX: -30 }],
    zIndex: 10,
  },
  checkpointsContainer: {
    position: 'absolute',
    top: 100,
    left: 16,
    right: 16,
    height: 80,
  },
  checkpoint: {
    position: 'absolute',
    alignItems: 'center',
    width: 60,
    transform: [{ translateX: -30 }],
  },
  checkpointDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  checkpointCompleted: {
    backgroundColor: theme.colors.success + '20',
    borderColor: theme.colors.success,
  },
  checkpointCurrent: {
    backgroundColor: theme.colors.primary + '20',
    borderColor: theme.colors.primary,
  },
  checkpointIcon: {
    fontSize: 18,
  },
  checkpointLabel: {
    fontSize: 10,
    textAlign: 'center',
    color: theme.colors.textSecondary,
  },
});
